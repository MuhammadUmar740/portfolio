import {
  Box,
  Container,
  SimpleGrid as Grid,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import profile from "../assets/profile_picture.jpg";
import { H3, Paragraph } from "./Typography";
import { BsPlayFill } from "react-icons/bs";

const AboutMe = () => {
  const skills = [
    "JavaScript  (ES6+)",
    "TypeScript",
    "React",
    "Chakra",
    "Bootstrap",
    "Node.js",
    "java",
    "python",
  ];

  return (
    <Container maxW="1160px">
      <Box mb={5}>
        <H3>About Me</H3>
      </Box>
      <Grid
        templateAreas={{
          base: `'info info' 'skills skills' 'image image'`,
          md: `'info info' 'skills image'`,
          lg: `'info image' 'info skills'`,
        }}
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1.5fr 1fr" }}
        gridTemplateRows={{ base: "1fr 0fr 0fr" }}
        spacing={{ base: 5, lg: 10 }}
      >
        <Box gridArea="info">
          <Paragraph>
            Hi there! I'm Umer Riaz, a passionate software engineer with a
            Bachelor's degree in Computer Science. For the past year, I've been
            working as a web developer, and I absolutely love creating things
            that live on the internet. It all started in 2020 when I got
            interested in web development while experimenting with customizing
            websites as part of a{" "}
            <Link color="teal" href="https://ncbae.edu.pk/">
              university
            </Link>{" "}
            course. Surprisingly, I learned a lot about HTML and CSS through
            that experience!
          </Paragraph>
          <Paragraph>
            Since then, I've been fortunate to work at a{" "}
            <Link href="https://www.surfiqtech.com/" color="teal">
              startup
            </Link>{" "}
            and a{" "}
            <Link color="teal" href="https://solutionsurface.com/">
              software development company
            </Link>
            . These days, my main focus is building accessible and inclusive
            products and digital experiences at{" "}
            <Link color="teal" href="https://solutionsurface.com/">
              Solution Surface
            </Link>
            . We serve a variety of clients, and I find great satisfaction in
            bringing their ideas to life.
          </Paragraph>
          <Paragraph>
            I'm truly passionate about what I do, and I'm constantly striving to
            improve. Technology has the power to make a positive impact, and I
            believe in harnessing that power through my work. I'm excited about
            the future and the opportunities that lie ahead. I'm always ready to
            push the boundaries and create meaningful solutions through software
            engineering.
          </Paragraph>
        </Box>
        <Box mx="auto" gridArea="image">
          <Box
            borderRadius="50%"
            overflow="hidden"
            border="10px solid"
            p={3}
            maxW="300px"
          >
            <Image src={profile} borderRadius="50%" />
          </Box>
        </Box>
        <Box gridArea="skills">
          <Paragraph>
            Here are a few technologies I’ve been working with recently:
          </Paragraph>
          <SimpleGrid columns={2} spacing={1}>
            <List spacing={5}>
              {skills.map(
                (skill, i) =>
                  i < Math.floor(skills.length / 2) && (
                    <ListItem key={i} fontSize='xs'>
                      <ListIcon as={BsPlayFill} color="green.500" />
                      {skill}
                    </ListItem>
                  )
              )}
            </List>
            <List spacing={5}>
              {skills.map(
                (skill, i) =>
                  i >= Math.floor(skills.length / 2) && (
                    <ListItem key={i} fontSize='xs'>
                      <ListIcon as={BsPlayFill} color="green.500" />
                      {skill}
                    </ListItem>
                  )
              )}
            </List>
          </SimpleGrid>
        </Box>
      </Grid>
    </Container>
  );
};

export default AboutMe;
