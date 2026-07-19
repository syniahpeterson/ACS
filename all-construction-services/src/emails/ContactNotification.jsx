import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function ContactNotification({
  name,
  phone,
  email,
  service,
  message,
}) {
  return (
    <Html>
      <Head />

      <Preview>New Contact Form Submission</Preview>

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
          <Heading>New Contact Request</Heading>

          <Hr />

          <Section>
            <Text>
              <strong>Name:</strong> {name}
            </Text>

            <Text>
              <strong>Phone:</strong> {phone}
            </Text>

            <Text>
              <strong>Email:</strong> {email}
            </Text>

            <Text>
              <strong>Service:</strong> {service || "Not specified"}
            </Text>

            <Hr />

            <Text>
              <strong>Project Details</strong>
            </Text>

            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
