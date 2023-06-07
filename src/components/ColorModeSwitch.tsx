import { Box, useColorMode } from '@chakra-ui/react';
import { BsMoon, BsMoonFill } from 'react-icons/bs';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Box onClick={toggleColorMode} fontSize='2xl' textAlign='end'>
      {isDarkMode ? <BsMoonFill /> : <BsMoon />}
    </Box>
  );
};

export default ColorModeSwitch;
