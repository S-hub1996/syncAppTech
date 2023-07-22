import {
    Box,
    chakra,
    Container,
    Heading,
    Image,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
import { Link } from 'react-scroll';
import dark from '../assets/images/dark.png'
import light from '../assets/images/light.png'

  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          {
          colorMode==='light'?  <Image src={light} m={'auto'} w={72}/>:<Image src={dark} w={72}/>
        }
          <Stack direction={'row'} spacing={6}>
            <Link 
            className="test1"
            to="test1"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}>Home</Link>
            <Link className="test1"
            to="test2"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}>About</Link>
            <Link className="test1"
            to="test3"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}>Services</Link>
            <Link className="test1"
            to="test4"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}>Contact</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2023 Sync App Tech. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }