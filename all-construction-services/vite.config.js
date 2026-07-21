import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { handleContactRequest } from "./api/contact.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "contact-api",
        configureServer(server) {
          server.middlewares.use("/api/contact", async (req, res, next) => {
            process.env.RESEND_API_KEY =
              env.RESEND_API_KEY || process.env.RESEND_API_KEY;
            process.env.CONTACT_EMAIL =
              env.CONTACT_EMAIL || process.env.CONTACT_EMAIL;
            process.env.CONTACT_FROM_EMAIL =
              env.CONTACT_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;

            let body = "";

            req.on("data", (chunk) => {
              body += chunk;
            });

            req.on("end", async () => {
              try {
                req.body = body ? JSON.parse(body) : {};
              } catch {
                req.body = {};
              }

              await handleContactRequest(req, res);
            });

            req.on("error", next);
          });
        },
      },
    ],
  };
});
