import Head from "next/head";
import { Box, Container, Text } from "@chakra-ui/layout";
import Footer from "../Footer";

const Layout = ({ children, title = "UX Philippines" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/brand_logos/uxph_icon.png" />
      </Head>
      <Box as="nav" bg="gray.800" p={4}>
        <Container maxWidth="container.lg">
          <Text as="p" fontWeight="bold" color="white" align="center">
            Navigation
          </Text>
        </Container>
      </Box>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
