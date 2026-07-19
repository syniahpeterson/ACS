import { Heading, Section, Text } from "@react-email/components";

export default function EmailHeader({ title, subtitle }) {
  return (
    <Section style={{ marginBottom: "32px" }}>
      <Heading
        as="h1"
        style={{
          margin: 0,
          fontSize: "28px",
          color: "#37423d",
        }}
      >
        All Construction Services LLC
      </Heading>

      <Text
        style={{
          color: "#666",
          marginTop: "8px",
          fontSize: "15px",
        }}
      >
        {subtitle}
      </Text>

      <Heading
        as="h2"
        style={{
          marginTop: "24px",
          fontSize: "22px",
          color: "#111827",
        }}
      >
        {title}
      </Heading>
    </Section>
  );
}
