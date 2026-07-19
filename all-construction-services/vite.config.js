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
          server.middlewares.use("/api/contact", async (req, res) => {
            const response = {
              statusCode: 200,
              status(code) {
                this.statusCode = code;
                return this;
              },
              json(payload) {
                res.statusCode = this.statusCode;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(payload));
                return this;
              },
            };

            process.env.RESEND_API_KEY =
              env.RESEND_API_KEY || process.env.RESEND_API_KEY;
            process.env.CONTACT_EMAIL =
              env.CONTACT_EMAIL || process.env.CONTACT_EMAIL;
            process.env.CONTACT_FROM_EMAIL =
              env.CONTACT_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;

            await handleContactRequest(req, response);
          });
        },
      },
    ],
  };
});
