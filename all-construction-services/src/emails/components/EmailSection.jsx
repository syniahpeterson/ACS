import { Section, Text } from "@react-email/components";

export default function EmailSection({ label, children }) {
  return (
    <Section
      style={{
        marginBottom: "18px",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          marginBottom: "6px",
          color: "#37423d",
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          margin: 0,
          color: "#374151",
          whiteSpace: "pre-wrap",
        }}
      >
        {children}
      </Text>
    </Section>
  );
}
