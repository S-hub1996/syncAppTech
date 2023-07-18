import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Code,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import banner1 from '../assets/images/home-hero-banner@2x.webp'
import banner2 from '../assets/images/talent-solutions-banner@2x.webp'
import banner3 from '../assets/images/web-app-dev-banner@2x.webp'
// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Banner() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(<Slider />);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Sync App Technologies",
      text: `"Transforming Dreams into Digital Reality: Your Web Development Experts"`,
      image:banner1,
    },
    {
      title: "Sync App Technologies",
      text:` "Transforming Dreams into Digital Reality: Your Web Development Experts"`,
      image:banner2,
    },
    {
      title: "Sync App Technologies",
      text: `"Transforming Dreams into Digital Reality: Your Web Development Experts"`,
      image:
        banner3,
    },
  ];

  return (
    <Box
    pt={16}
      position={"relative"}
      height={"100%"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"-moz-max-content"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height={"750px"} position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top={["30%","25%","30%","25%"]}
                left={["0",'0',"0","-45%","-45%"]}
                transform="translate(0, -50%)"
              >
                <Text
                  bgGradient="linear(to-r, blue.500, pink.500)"
                  bgClip="text"
                  fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                >
                  {card.title}
                </Text>
                <Code
                  bgGradient="linear(to-r, purple.100, red.100)"
                  fontSize={{ base: "md",md:"md", lg: "lg" }}
                  color="gray.500"
                >
                  {card.text}
                </Code>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}