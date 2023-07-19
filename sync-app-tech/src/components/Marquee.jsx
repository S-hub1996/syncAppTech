// import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { Box, Text } from "@chakra-ui/react";
import times from "lodash/times";
import Marquee from "react-fast-marquee";

export default function MarqueeSlider(){



 return <Box  height="50px" bg={'gray.200'} textAlign={'center'}>
  <Marquee >
    <Text fontSize={'2xl'}>| Sync App Tech || Web App Development | Outsourcing | Custom ERP | Andriod and IOS App Development | Search Engine Optimization |</Text>
  </Marquee>
</Box>

}