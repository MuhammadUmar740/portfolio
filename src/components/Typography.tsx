import { ReactNode } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  color?: string;
  textShadow?: string;
}
const H1 = ({
  children,
  color = '#ccd6f6',
  textShadow = "2px 5px 25px black",
}: Props) => {
  const headingColor = useColorModeValue(undefined  ,color)
  return (
    <Heading
      fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "7xl" }}
      color={headingColor}
      textShadow={textShadow}
    >
      {children}
    </Heading>
  );
};

const H3 = ({ children, color = "#ccd6f6" }: Props) => {
  const textColor = useColorModeValue(undefined,color)
  return (
    <Heading as="h3" color={textColor} fontSize={{base:"lg",md:"3xl",lg:"4xl"}}>
      <Flex alignItems='center'>
      <Box whiteSpace='nowrap' cursor='default'>{children}</Box> 
      <Box height={'1px'} width='40%' bg='white' ms={8}/>
      </Flex> 
    </Heading>
  )
};

const Paragraph = ({ children, color = "#8892b0" }: Props) => {
  const textColor = useColorModeValue(undefined,color)
  return <Text color={textColor} mb={3} fontSize={{base:'sm',md:'md'}}>{children}</Text>;
};
export default H1;
export { Paragraph, H3 };
