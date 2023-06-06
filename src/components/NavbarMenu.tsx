import { List, ListItem, Show } from "@chakra-ui/react";
import { AiOutlineMenu } from 'react-icons/ai'

const NavbarMenu = () => {
  const menuItems = ["Profile", "About", "Projects"];
  const menuStyle = {
    mr: 5,
    fontSize: { base: "md", lg: "lg" },
    fontWeight: "bold",
  };
  return (
    <List display="flex" alignItems="center" justifyContent={{base:'end',md:'start'}}>
      <Show above="md">
        {menuItems.map((item, index) => (
          <ListItem key={index} {...menuStyle} textTransform="uppercase">
            {item}
          </ListItem>
        ))}
      </Show>
      <Show below="md">
        <AiOutlineMenu fontSize='25px'/>
      </Show>
    </List>
  );
};

export default NavbarMenu;
