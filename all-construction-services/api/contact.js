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

      if (!trimmed || trimmed.startsWith("#")) continue;

      const separatorIndex = trimmed.indexOf("=");

      if (separatorIndex === -1) continue;

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

function normalizeSenderAddress(value) {
  const trimmed = value?.trim();

  if (!trimmed) {
    return "";
  }

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return trimmed;
  }

  const match = trimmed.match(/^(.+)\s*<([^>]+)>$/);

  if (match) {
    const email = match[2].trim();

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? trimmed : "";
  }

  return "";
}

function getPhoneDigitsOnly(phoneNumber) {
  return phoneNumber?.replace(/\D/g, "") || "";
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
    const companyName =
      getRuntimeEnv("CONTACT_NAME") || "All Construction Services";
    const companyPhone = getRuntimeEnv("CONTACT_PHONE") || "(610) 673-0769";
    const companyPhoneDigits = getPhoneDigitsOnly(companyPhone);

    const configuredFromAddress = normalizeSenderAddress(
      getRuntimeEnv("CONTACT_FROM_EMAIL") || "onboarding@resend.dev",
    );
    const fromAddress = configuredFromAddress || "onboarding@resend.dev";

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

    const subject = `New Contact Form Submission from ${name}`;
    const companyHtml = `
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: Arial, sans-serif; background-color: #f7f7f5; padding: 24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="640" style="background-color: #ffffff; border-radius: 12px; overflow: hidden;">
              <tr>
                <td style="background-color: #2f3f37; padding: 24px 32px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td width="56" valign="middle" style="padding-right: 12px;">
                        <div style="width: 56px; height: 56px; border-radius: 50%; background-color: #f1efe8; display: inline-block; text-align: center; line-height: 56px; font-size: 24px; font-weight: bold; color: #2f3f37;">A</div>
                      </td>
                      <td valign="middle">
                        <div style="font-size: 24px; font-weight: bold; color: #ffffff;">${companyName}</div>
                        <div style="font-size: 14px; color: #d9e1dc; margin-top: 4px;">New contact request</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 32px;">
                  <div style="font-size: 20px; font-weight: bold; color: #1f2937; margin-bottom: 12px;">New Contact Form Submission</div>
                  <div style="font-size: 14px; color: #6b7280; margin-bottom: 24px;">A new inquiry was submitted through the website.</div>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 140px; color: #374151;">Name</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${phone}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${email}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Service</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${service || "Not specified"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
                      <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${message}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;

    let companyResult;

    try {
      companyResult = await resend.emails.send({
        from: fromAddress,
        to: contactEmail,
        replyTo: email,
        subject,
        html: companyHtml,
        text: `New contact form submission from ${name}\n\nPhone: ${phone}\nEmail: ${email}\nService: ${service || "Not specified"}\n\nMessage:\n${message}`,
      });
    } catch (companyError) {
      console.error("Company email error:", companyError);
      return sendJsonResponse(res, 500, {
        success: false,
        message: companyError.message || "The company email could not be sent.",
      });
    }

    if (companyResult?.error) {
      console.error("Company email provider error:", companyResult.error);
      return sendJsonResponse(res, 500, {
        success: false,
        message:
          companyResult.error.message || "The company email could not be sent.",
      });
    }

    try {
      const customerEmail = email?.trim();

      if (!customerEmail) {
        console.warn("No customer email provided in form");
        return sendJsonResponse(res, 400, {
          success: false,
          message: "Email address is required.",
        });
      }

      //   - Change line below from: confirmationRecipient = contactEmail
      //   - To: confirmationRecipient = customerEmail
      const confirmationRecipient = contactEmail;

      console.log(
        "Sending confirmation email to:",
        confirmationRecipient,
        "(customer form email:",
        customerEmail,
        ")",
      );

      const confirmationResult = await resend.emails.send({
        from: fromAddress,
        to: confirmationRecipient,
        replyTo: customerEmail,
        subject: "We received your request",
        html: `
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: Arial, sans-serif; background-color: #f7f7f5; padding: 24px 0;">
            <tr>
              <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="640" style="background-color: #ffffff; border-radius: 12px; overflow: hidden;">
                  <tr>
                    <td style="background-color: #2f3f37; padding: 24px 32px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td width="56" valign="middle" style="padding-right: 12px;">
                            <div style="width: 56px; height: 56px; border-radius: 50%; background-color: #f1efe8; display: inline-block; text-align: center; line-height: 56px; font-size: 24px; font-weight: bold; color: #2f3f37;">A</div>
                          </td>
                          <td valign="middle">
                            <div style="font-size: 24px; font-weight: bold; color: #ffffff;">${companyName}</div>
                            <div style="font-size: 14px; color: #d9e1dc; margin-top: 4px;">Thank you for reaching out</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 32px;">
                      <div style="font-size: 20px; font-weight: bold; color: #1f2937; margin-bottom: 12px;">Thank you, ${name}!</div>
                      <div style="font-size: 15px; color: #4b5563; line-height: 1.7;">We received your request and will follow up shortly.</div>
                      <div style="font-size: 15px; color: #4b5563; line-height: 1.7; margin-top: 8px;">If your request is urgent, please call us directly at ${companyPhone}.</div>
                      <div style="margin-top: 24px;">
                        <a href="tel:${companyPhoneDigits}" style="background-color: #2f3f37; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 6px; display: inline-block; font-weight: bold;">Call ${companyPhone}</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        `,
        text: [
          `Hello ${name},`,
          "",
          `Thank you for contacting ${companyName}.`,
          "We received your request and will follow up shortly.",
          "",
          `If your request is urgent, please call us directly at ${companyPhone}.`,
        ].join("\n"),
      });

      console.log("Confirmation email sent", {
        to: customerEmail,
        messageId: confirmationResult?.data?.id || null,
      });

      if (confirmationResult?.error) {
        console.error(
          "Confirmation email provider error:",
          confirmationResult.error,
        );
        return sendJsonResponse(res, 500, {
          success: false,
          message:
            confirmationResult.error.message ||
            "Confirmation email could not be sent.",
        });
      }
    } catch (confirmationError) {
      console.error("Customer confirmation email failed:", confirmationError);
      return sendJsonResponse(res, 500, {
        success: false,
        message:
          confirmationError.message || "Confirmation email could not be sent.",
      });
    }

    return sendJsonResponse(res, 200, {
      success: true,
      message: "Your request has been sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return sendJsonResponse(res, 500, {
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

export default async function handler(req, res) {
  return handleContactRequest(req, res);
}
