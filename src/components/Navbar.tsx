import { Box, Image } from '@chakra-ui/react';
import logo from '../assets/logoLight.png';
const Navbar = () => {
  return (
    <Box>
        <Image src={logo} alt='Umer Riaz' boxSize='100px' objectFit='contain'/>
    </Box>
  )
}

export default Navbar