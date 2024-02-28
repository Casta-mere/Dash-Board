import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aborad!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="http://dino.castamerego.com">
              www.dino.castamerego.com
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
