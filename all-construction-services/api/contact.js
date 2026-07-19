import fs from "node:fs";
import path from "node:path";
import { Resend } from "resend";

function loadEnvFile() {
  const envFilePath = path.resolve(process.cwd(), ".env.local");

  try {
    const content = fs.readFileSync(envFilePath, "utf8");
    const values = {};

    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      const separatorIndex = trimmed.indexOf("=");

      if (separatorIndex === -1) {
        continue;
      }

      const key = trimmed.slice(0, separatorIndex).trim();
      let value = trimmed.slice(separatorIndex + 1).trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      values[key] = value;
    }

    return values;
  } catch {
    return {};
  }
}

function getRuntimeEnv(name) {
  const fromProcess =
    process.env[name] || globalThis?.process?.env?.[name] || "";

  if (fromProcess) {
    return fromProcess;
  }

  const envFileValues = loadEnvFile();
  return envFileValues[name] || "";
}

function getResendClient() {
  const apiKey = getRuntimeEnv("RESEND_API_KEY");

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

function sendJsonResponse(res, statusCode, payload) {
  if (typeof res.status === "function" && typeof res.json === "function") {
    return res.status(statusCode).json(payload);
  }

  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));

  return res;
}

async function readRequestBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  if (typeof req.read === "function") {
    const chunks = [];

    for await (const chunk of req) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }

    const rawBody = Buffer.concat(chunks).toString("utf8");

    if (!rawBody) {
      return {};
    }

    try {
      return JSON.parse(rawBody);
    } catch {
      return {};
    }
  }

  return {};
}

export async function handleContactRequest(req, res) {
  if (req.method !== "POST") {
    return sendJsonResponse(res, 405, {
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const body = await readRequestBody(req);
    const { name, phone, email, service, message, website } = body;

    if (website) {
      return sendJsonResponse(res, 200, {
        success: true,
        message: "Request received.",
      });
    }

    if (!name || !phone || !email || !message) {
      return sendJsonResponse(res, 400, {
        success: false,
        message: "Please complete all required fields.",
      });
    }

    const resend = getResendClient();
    const contactEmail = getRuntimeEnv("CONTACT_EMAIL");
    const fromAddress =
      getRuntimeEnv("CONTACT_FROM_EMAIL") ||
      "All Construction Services <onboarding@resend.dev>";

    if (!resend) {
      return sendJsonResponse(res, 500, {
        success: false,
        message: "Missing RESEND_API_KEY environment variable.",
      });
    }

    if (!contactEmail) {
      return sendJsonResponse(res, 500, {
        success: false,
        message: "Missing CONTACT_EMAIL environment variable.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: contactEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
New Contact Form Submission

Name: ${name}

Phone: ${phone}

Email: ${email}

Service Requested: ${service || "Not specified"}

Project Details:
${message}
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return sendJsonResponse(res, 500, {
        success: false,
        message: error.message || "Failed to send email.",
      });
    }

    console.log("Email sent successfully:", data);

    return sendJsonResponse(res, 200, {
      success: true,
      message: "Your request has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return sendJsonResponse(res, 500, {
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

export default async function handler(req, res) {
  return handleContactRequest(req, res);
}
