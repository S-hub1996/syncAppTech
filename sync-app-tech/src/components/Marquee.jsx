// import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { Box, Code, Text, useColorModeValue } from "@chakra-ui/react";
import times from "lodash/times";
import Marquee from "react-fast-marquee";

export default function MarqueeSlider(){



 return <Box pt={2} height="50px" bg={useColorModeValue('gray.100', 'gray.900')} textAlign={'center'}>
  <Marquee >
    <Code fontSize={['lg','2xl']}>| Sync App Tech || Web App Development | Outsourcing | Custom ERP | Andriod and IOS App Development | Search Engine Optimization |</Code>
  </Marquee>
</Box>

}