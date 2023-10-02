import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { React } from 'react';
  import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
  } from 'react-icons/fc';
  

  const Card = ({ heading, description, icon, href }) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function Support() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading  py={5}
            fontSize={[24,48]}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>
Our 24/7 Support           </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          We understand that your business operates around the clock, and so does our support. Count on us 24/7.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'24 X 7 Customer Support'}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                'We belive in customer satisfaction and hence we deliver the quality services.'
              }
              href={'#'}
            />
            <Card
              heading={'Experienced team'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                'We have strong and expended team of developers .'
              }
              href={'#'}
            />
            <Card
              heading={'All Sizes Business'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'We do websites & mobile apps for all sizes of business.'
              }
              href={'#'}
            />
            <Card
              heading={'On-time Delivery'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'We always enthusiastic in delivering every project on-time.'
              }
              href={'#'}
            />
            <Card
              heading={'Awesome Results'}
              icon={<Icon as={FcAbout} w={10} h={10} />}
              description={
                'Our Digital Marketing Services will give the awesome results'
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }