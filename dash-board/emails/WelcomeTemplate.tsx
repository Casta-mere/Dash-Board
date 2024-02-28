import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aborad!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="http://dino.castamerego.com">
            www.dino.castamerego.com
          </Link>
        </Container>
      </Body>
    </Html>
  );
};
export default WelcomeTemplate;
