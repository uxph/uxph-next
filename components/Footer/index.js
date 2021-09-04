import {
  Box,
  Container,
  Text,
  Stack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/layout";
import { Image, Icon } from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialMedia = [
    {
      label: "Facebook",
      icon: FaFacebookSquare,
      url: "https://www.facebook.com/uxphofficial/",
      urlLabel: "/uxphofficial",
    },
    {
      label: "Facebook Group",
      icon: FaFacebookSquare,
      url: "https://www.facebook.com/groups/uxphofficial/",
      urlLabel: "/groups/uxphofficial",
    },
    {
      label: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/company/uxph/",
      urlLabel: "/company/uxphofficial",
    },
    {
      label: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/uxphofficial",
      urlLabel: "/uxphofficial",
    },
    {
      label: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/uxphofficial",
      urlLabel: "/uxphofficial",
    },
    {
      label: "Contact us",
      icon: FaEnvelope,
      url: "mailto:info@uxph.org",
      urlLabel: "info@uxph.org",
    },
  ];

  return (
    <Box
      as="footer"
      bg="gray.800"
      py={{
        base: 12,
        sm: 12,
        md: 16,
      }}
    >
      <Container maxWidth="container.lg">
        <Stack
          spacing={12}
          direction={{
            base: "column-reverse",
            sm: "column-reverse",
            md: "row",
          }}
        >
          <Box as="div">
            <Image
              src="/images/brand_logos/uxph_logo.svg"
              maxWidth={130}
              width="100%"
              alt="UXPH logo"
              display="block"
              mb={2}
            />
            <Box as="div">
              <Text as="p" color="white" fontWeight="bold">
                &copy; Copyright {currentYear}
              </Text>
              <Text as="p" color="blue.400" mb={3}>
                <Link href="/about">View Code of conduct</Link>
              </Text>
              <Text as="small" color="gray.500">
                This site is powered by Netlify
              </Text>
            </Box>
          </Box>
          <Box as="div">
            <Heading
              as="h3"
              color="white"
              fontWeight="bold"
              fontSize={{
                base: 22,
                sm: 22,
                md: 24,
              }}
              mb={4}
            >
              Connect with us
            </Heading>
            <SimpleGrid
              columns={{
                base: 1,
                sm: 2,
                md: 3,
              }}
              spacing={4}
            >
              {socialMedia.map((social, index) => {
                const { label, icon, url, urlLabel } = social;
                return (
                  <Stack spacing={4} direction="row" key={index}>
                    <Box as="div">
                      <Icon as={icon} color="white" fontSize={24} />
                    </Box>
                    <Box as="div">
                      <Heading as="h4" color="white" fontSize={16}>
                        {label}
                      </Heading>
                      <Text
                        as="a"
                        href={url}
                        target="_blank"
                        color="blue.400"
                        fontSize={14}
                      >
                        {urlLabel}
                      </Text>
                    </Box>
                  </Stack>
                );
              })}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
