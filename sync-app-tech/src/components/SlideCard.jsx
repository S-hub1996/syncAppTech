import {  Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
// import { Link } from 'react-router-dom';

export const SlideCard = ({Props}) => {
    
    // console.log(Props)
    return (
        // <Link to={`/packages/${Props.title}`}>
      <VStack
        w="１００％"
        h={'-webkit-fit-content'}
        // bg="cyan.400"
        // border="cyan.700"
        alignContent="center"
        justifyContent="center"
        mx="4"
      >
        <Image   my={2} w={['360px']} h={['240px']} _hover={{transform:'scale(1.1)' }} src={Props.img} fit={'contain'}/>
        <Text color={'gray.400'} fontWeight="bold">
        {Props.title}
        </Text>
      </VStack>
        // </Link>
    );
  };
  