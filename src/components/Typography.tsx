import { ReactNode } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  color?: string;
  textShadow?: string;
}
const H1 = ({
  children,
  color = "#ccd6f6",
  textShadow = "2px 5px 10px black",
}: Props) => {
  return (
    <Heading
      fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "7xl" }}
      color={color}
      textShadow={textShadow}
    >
      {children}
    </Heading>
  );
};

const H3 = ({ children, color = "#ccd6f6" }: Props) => {
  return (
    <Heading as="h3" color={color} fontSize={{base:"lg",md:"3xl",lg:"4xl"}}>
      <Flex alignItems='center'>
      <Box whiteSpace='nowrap' cursor='default'>{children}</Box> 
      <Box height={'1px'} width='40%' bg='white' ms={8}/>
      </Flex> 
    </Heading>
  )
};

const Paragraph = ({ children, color = "#8892b0" }: Props) => {
  return <Text color={color}>{children}</Text>;
};
export default H1;
export { Paragraph, H3 };
