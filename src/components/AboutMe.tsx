import { Box, Container, SimpleGrid as Grid, Image } from "@chakra-ui/react";
import profile from "../assets/profile_picture.jpg";
import { H3, Paragraph } from "./Typography";

const AboutMe = () => {
  const aboutInfo = [
    "Hi there! I'm Umer Riaz, a passionate software engineer with a Bachelor's degree in Computer Science. For the past year, I've been working as a web developer, and I absolutely love creating things that live on the internet. It all started in 2020 when I got interested in web development while experimenting with customizing websites as part of a university course. Surprisingly, I learned a lot about HTML and CSS through that experience!",
    "Since then, I've been fortunate to work at a startup and a software development company. These days, my main focus is building accessible and inclusive products and digital experiences at Solution Surface. We serve a variety of clients, and I find great satisfaction in bringing their ideas to life.",
    "I'm truly passionate about what I do, and I'm constantly striving to improve. Technology has the power to make a positive impact, and I believe in harnessing that power through my work. I'm excited about the future and the opportunities that lie ahead. I'm always ready to push the boundaries and create meaningful solutions through software engineering.",
  ];
  return (
    <Container maxW="1000px">
      <H3>About Me</H3>
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1.8fr" }}
        spacing={10}
      >
        <Box maxW='300px'>
          <Box
            borderRadius="50%"
            overflow="hidden"
            border="10px solid"
            p={3}
          >
            <Image src={profile} borderRadius="50%"/>
          </Box>
        </Box>
        <Box>
          {aboutInfo.map((info, i) => (
            <Box mb={3}>
              <Paragraph key={i}>{info}</Paragraph>
            </Box>
          ))}
        </Box>
      </Grid>
    </Container>
  );
};

export default AboutMe;
