import {  Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
// import { Link } from 'react-router-dom';

export const SlideCard = ({Props}) => {
    
    // console.log(Props)
    return (
        // <Link to={`/packages/${Props.title}`}>
      <VStack
        w="１００％"
        h="250px"
        // bg="cyan.400"
        // border="cyan.700"
        alignContent="center"
        justifyContent="center"
        mx="4"
      >
        <Image     _hover={{transform:'scale(1.1)' }} src={Props} fit={"cover"} h={'220px'} w={['360px','420px','500px']}/>
        <Text color={'gray.400'} fontWeight="bold">
          Web App Services
        </Text>
      </VStack>
        // </Link>
    );
  };
  