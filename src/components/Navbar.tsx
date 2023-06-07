import { Grid, Image, useColorMode } from '@chakra-ui/react';
import logoLight from '../assets/logoLight.png';
import logoDark from '../assets/logoDark.png';
import NavbarMenu from './NavbarMenu';
const Navbar = () => {
  const {colorMode} = useColorMode();
  const logo = colorMode === 'dark'? logoDark:logoLight;
  return (
    <Grid templateColumns="1fr 1fr">
        <Image src={logo} alt='Umer Riaz' boxSize='100px' objectFit='contain'/>
        <NavbarMenu/>
    </Grid>
  )
}

export default Navbar