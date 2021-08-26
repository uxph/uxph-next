import React from "react";
import { Box, Text, Container } from "@chakra-ui/layout";
import { Layout } from "../components";

const AboutPage = () => {
  return (
    <Layout>
      <Box as="header" p={4} bg="red" color="white">
        <Container maxWidth="container.lg">
          <Text align="center" fontWeight="bold">
            Main content
          </Text>
        </Container>
      </Box>
    </Layout>
  );
};

export default AboutPage;
