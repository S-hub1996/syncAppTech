import { Box, Button, Heading, IconButton, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ImgSlider from './Slider'
import allpanel from "../assets/apps/allpanel.jpeg"
import asia2 from "../assets/apps/asia2.jpeg"
import esex from "../assets/apps/esex.jpeg"
import goex from "../assets/apps/goex.jpeg"
import radheex from "../assets/apps/radheex.jpeg"
import taj from "../assets/apps/taj777.jpeg"
import { ArrowForwardIcon, PhoneIcon } from '@chakra-ui/icons'

const Sites = () => {
    const appImages=[allpanel,asia2,esex,goex,radheex,taj]
    const appImages2=["https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80","https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80","https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80","https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80","https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80","https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"]
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

<ImgSlider pack={appImages2}/>

<Button rightIcon={<ArrowForwardIcon />} color={'white'} bgGradient='linear(to-r, gray.300, gray.500)'
                rounded={'full'}
                _hover={{ bg: 'gray.500' }}>
                Contact Us
              </Button>
              
    </Box>
  )
}

export default Sites