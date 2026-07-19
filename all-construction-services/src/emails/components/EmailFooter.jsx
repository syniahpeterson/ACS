import { Hr, Section, Text } from "@react-email/components";

export default function EmailFooter() {
  return (
    <>
      <Hr />

      <Section>
        <Text
          style={{
            color: "#6b7280",
            fontSize: "13px",
          }}
        >
          All Construction Services LLC
        </Text>

        <Text
          style={{
            color: "#6b7280",
            fontSize: "13px",
          }}
        >
          Chester, Pennsylvania
        </Text>

        <Text
          style={{
            color: "#6b7280",
            fontSize: "13px",
          }}
        >
          Phone: (610) 673-0769
        </Text>
      </Section>
    </>
  );
}
