import { Box, Button, Container, Text } from "@chakra-ui/react";
import H1, { Paragraph } from "./Typography";

const Intro = () => {
  const headingStyles = {
    fontSize: "7xl",
    fontWeight: "bold",
  };

  return (
    <Container maxW="1000px">
      <Text color="teal" mb={5}>Hi, my name is</Text>
      <H1 textShadow="2px -3px 10px black">
        Muhammad Umer Riaz.
      </H1>
      <H1 color="#8892b0">
        I build things for the web.
      </H1>
      <Box maxW="650px" mb={5}>
        <Paragraph>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at <Button as='button' variant='link' color='teal'>Upstatement</Button>.
        </Paragraph>
      </Box>
      <Button variant='outline' colorScheme="teal" size='md' fontWeight='light'>Check out my CV</Button>
    </Container>
  );
};

export default Intro;
