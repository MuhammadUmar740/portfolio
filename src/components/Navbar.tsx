import { Grid, Image } from '@chakra-ui/react';
import logo from '../assets/logoLight.png';
import NavbarMenu from './NavbarMenu';
const Navbar = () => {
  return (
    <Grid templateColumns="1fr 1fr">
        <Image src={logo} alt='Umer Riaz' boxSize='100px' objectFit='contain'/>
        <NavbarMenu/>
    </Grid>
  )
}

export default Navbar