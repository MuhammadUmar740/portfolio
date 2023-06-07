import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

const Intro = () => {
  const headingStyles = {
    fontSize: "7xl",
    fontWeight: "bold",
  };

  return (
    <Container maxW="1000px">
      <Text color="teal" mb={5}>Hi, my name is</Text>
      <Heading {...headingStyles} color='#ccd6f6'>
        Muhammad Umer Riaz.
      </Heading>
      <Heading {...headingStyles} color="#8892b0" mb={3}>
        I build things for the web.
      </Heading>
      <Box maxW="650px" mb={5}>
        <Text color='#8892b0'>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at <Button as='button' variant='link' color='teal'>Upstatement</Button>.
        </Text>
      </Box>
      <Button variant='outline' colorScheme="teal" size='md' fontWeight='light'>Check out my CV</Button>
    </Container>
  );
};

export default Intro;
