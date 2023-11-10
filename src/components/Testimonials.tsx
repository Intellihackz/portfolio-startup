"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>
            See why lot people hire TechwithTobi for their Automation Needs
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                TechwithTobi: A united AI family pushing boundaries, shaping the
                future together.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://media.licdn.com/dms/image/D4D35AQHeZ_9N8tAgYQ/profile-framedphoto-shrink_200_200/0/1697327972565?e=1699873200&v=beta&t=vUp2YlW4R6Ai5hru1rmxH8wowcWKWuX69D_BtLpXuP8"
              }
              name={"Oluyemi Sopade"}
              title={"Engineer at Kingdom Tech"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                Mindblowing service redefines excellence, delivering
                unparalleled innovation and customer satisfaction.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://media.licdn.com/dms/image/C5603AQGXFa-tnkOEbg/profile-displayphoto-shrink_200_200/0/1565697213115?e=1704931200&v=beta&t=vpq6i9-n-tiqsls9QY-Os50tdgNW5BHdg5btilHxETo"
              }
              name={"James Titiloye"}
              title={"Customer"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
