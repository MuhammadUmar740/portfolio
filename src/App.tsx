import { Box, Grid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid
      templateColumns="1fr"
      templateRows="auto 1fr auto"
      templateAreas={`"nav"
                      "main"
                      "footer"`}
      minHeight="100vh"
    >
      {/* Navigation */}
      <Box gridArea="nav">
        <Navbar/>
      </Box>

      {/* Main Section */}
      <Box gridArea="main" p={4}>
        Main Section
      </Box>

      {/* Footer */}
      <Box gridArea="footer" p={4} bg="gray.200">
        Footer
      </Box>
    </Grid>
  );
};

export default App