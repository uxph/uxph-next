import React from "react";
import { Box, Container, Text } from "@chakra-ui/layout";

const Layout = ({ children }) => {
  return (
    <>
      <Box as="nav" bg="gray.800" p={4}>
        <Container maxWidth="container.lg">
          <Text as="p" fontWeight="bold" color="white" align="center">
            Navigation
          </Text>
        </Container>
      </Box>
      {children}
      <Box as="footer" bg="yellow.400" p={4}>
        <Container maxWidth="container.lg">
          <Text as="p" fontWeight="bold" color="white" align="center">
            Footer
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Layout;
