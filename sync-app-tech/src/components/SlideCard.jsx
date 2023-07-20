import {  Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
// import { Link } from 'react-router-dom';

export const SlideCard = ({Props}) => {
    
    // console.log(Props)
    return (
        // <Link to={`/packages/${Props.title}`}>
      <VStack
        w="１００％"
        h={['200px',"350px"]}
        // bg="cyan.400"
        // border="cyan.700"
        alignContent="center"
        justifyContent="center"
        mx="4"
      >
        <Image   my={2}  _hover={{transform:'scale(1.1)' }} src={Props} fit={"cover"} maxW={'360px'}/>
        <Text color={'gray.400'} fontWeight="bold">
          Web App Services
        </Text>
      </VStack>
        // </Link>
    );
  };
  