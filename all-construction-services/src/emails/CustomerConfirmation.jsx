import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import company from "../data/company";

export default function CustomerConfirmation({ name }) {
  return (
    <Html>
      <Head />

      <Preview>We received your request</Preview>

      <Body
        style={{
          backgroundColor: "#f6f9fc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            margin: "40px auto",
            padding: "40px",
            borderRadius: "8px",
            maxWidth: "600px",
          }}
        >
          <Heading style={{ marginBottom: "8px" }}>Thank you, {name}!</Heading>

          <Text style={{ color: "#6b7280", fontSize: "15px", marginTop: 0 }}>
            {company.name}
          </Text>

          <Hr />

          <Section>
            <Text style={{ fontSize: "16px", lineHeight: "24px" }}>
              We’ve received your request and our team will review it shortly.
            </Text>
            <Text style={{ fontSize: "16px", lineHeight: "24px" }}>
              A specialist will follow up as soon as possible to discuss your
              project.
            </Text>
            <Text style={{ fontSize: "16px", lineHeight: "24px" }}>
              If your request is urgent, please call us directly at{" "}
              {company.contact.phone}.
            </Text>
          </Section>

          <Section style={{ marginTop: "24px" }}>
            <Button
              href={company.contact.phoneLink}
              style={{
                backgroundColor: "#37423d",
                color: "#ffffff",
                padding: "12px 20px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Call {company.contact.phone}
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
