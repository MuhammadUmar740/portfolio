import { Box, Button, Container, Link, Text } from "@chakra-ui/react";
import H1, { Paragraph } from "./Typography";

const Intro = () => {
  const headingStyles = {
    fontSize: "7xl",
    fontWeight: "bold",
  };

  return (
    <>
      <Text color="teal" mb={5}>
        Hi, my name is
      </Text>
      <H1>Muhammad Umer Riaz.</H1>
      <H1 color="#8892b0">I build things for the web.</H1>
      <Box maxW="650px" mb={5}>
        <Paragraph>
          I have expertise as a software engineer, dedicated to developing
          outstanding digital experiences. Alongside my software engineering
          skills, I also have a knack for design. My current focus revolves
          around creating accessible and user-friendly React applications{" "}
          <Link
            href="https://www.solutionsurface.com"
            color="teal"
            target="_blank"
          >
            Solution Surface
          </Link>
        </Paragraph>
      </Box>
      <Button variant="outline" colorScheme="teal" size="md" fontWeight="light">
        <a
          href="https://drive.google.com/file/d/1q5fX21cJCQ-ni3jTGYPtmXpra9q2toLA/view"
          target="_blank"
        >
          Check out my CV
        </a>
      </Button>
    </>
  );
};

export default Intro;
