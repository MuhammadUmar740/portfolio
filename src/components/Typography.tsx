import { ReactNode } from "react"
import { Heading, Text } from "@chakra-ui/react";

interface Props{
    children:ReactNode;
    color?:string;
}
const H1 = ({children,color = '#ccd6f6'}:Props) => {
  return (
    <Heading fontSize={{base:'2xl',sm:'3xl',md:'5xl',lg:'7xl'}} color={color}>
        {children}
    </Heading>
  )
}

const Paragraph = ({children,color='#8892b0'}:Props)=>{
  return (
    <Text color={color}>
      {children}
    </Text>
  );
}
export default H1;
export {Paragraph};