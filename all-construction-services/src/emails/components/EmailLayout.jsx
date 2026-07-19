import { Body, Container, Html } from "@react-email/components";

export default function EmailLayout({ children }) {
  return (
    <Html>
      <Body
        style={{
          backgroundColor: "#f3f4f6",
          padding: "40px 20px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "12px",
          }}
        >
          {children}
        </Container>
      </Body>
    </Html>
  );
}
