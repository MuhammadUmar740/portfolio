import { Box, List, ListItem, Show } from "@chakra-ui/react";
import { AiOutlineMenu } from 'react-icons/ai'
import ColorModeSwitch from "./ColorModeSwitch";

const NavbarMenu = () => {
  const menuItems = ["Profile", "About", "Projects"];
  const menuStyle = {
    mr: 5,
    fontSize: { base: "md", lg: "lg" },
    fontWeight: "bold",
  };
  return (
    <List display="flex" alignItems="center" justifyContent={{base:'end',md:'space-between'}}>
      <Show above="md">
        <Box display="flex">
          {menuItems.map((item, index) => (
            <ListItem key={index} {...menuStyle} textTransform="uppercase">
              {item}
            </ListItem>
          ))}
        </Box>
      </Show>
      <ColorModeSwitch/>
      <Show below="md">
        <AiOutlineMenu fontSize='25px'/>
      </Show>
    </List>
  );
};

export default NavbarMenu;
