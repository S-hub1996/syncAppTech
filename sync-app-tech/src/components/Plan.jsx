import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    // useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  

  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Plan() {
    return (
      <Container maxW={'5xl'} my={5} py={12}  bg={'white'}>
        <SimpleGrid bg={'gray.50'} columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={'blue.50'}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text>
            <Heading>A digital Product design management</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Access vetted experts in the tech stack of your choice.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={'gray.100'}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={'yellow.100'}
                text={'Business Planning'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={'green.100'}
                text={'Financial Planning'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={'purple.100'}
                text={'Market Analysis'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }