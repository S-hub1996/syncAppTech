import { Box, Button, Heading, IconButton, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ImgSlider from './Slider'
import outSource from "../assets/images/intrinsically-agile@2x.webp"
import seo from "../assets/images/bespoke-training@2x.webp"
import customErp from "../assets/images/end-to-end-services@2x.webp"
import webApp from "../assets/images/eminent-expertise@2x.webp"
import mobApp from "../assets/images/great-engineering-illustration@2x.webp"
import AIpower from "../assets/images/taking-selfie-img@2x.webp"
import { ArrowForwardIcon, PhoneIcon } from '@chakra-ui/icons'

const Sites = () => {
    const appImages2=[outSource,seo,customErp,webApp,mobApp,AIpower]
    const appImages=[{title:"OutSourcing",img:outSource},{title:"SEO",img:seo},{title:"Custom ERP",img:customErp},{title:"Web App Development",img:webApp},{img:mobApp,title:"Andriod and IOS"},{img:AIpower,title:"AI Power"}]

    // console.log(appImages)
  return (
    <Box  py={['10']} textAlign={'center'}  lineHeight={'110%'}>
        <Text   fontFamily={'Work Sans'}
            fontWeight={'bold'}
            fontSize={20}
            textTransform={'uppercase'}
            color={'purple.400'}>
      We are here to serve
        </Text>
        <Heading   py={5}
            fontSize={48}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>Services</Heading>
<Text   margin={'auto'}
            width={'70%'}
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={useColorModeValue('gray.500', 'gray.400')}>Explore multiple options for maximum fun Use the power of mind.
</Text>

<ImgSlider pack={appImages}/>

<Button rightIcon={<ArrowForwardIcon />} color={'white'} bgGradient='linear(to-r, gray.300, gray.500)'
                rounded={'full'}
                _hover={{ bg: 'gray.500' }}>
                Contact Us
              </Button>
              
    </Box>
  )
}

export default Sites