import {
    Box,
    chakra,
    Container,
    Image,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import {  FaTwitter,FaLinkedin, FaYoutube } from 'react-icons/fa';
  import {  SiGmail } from 'react-icons/si';
  import { React } from 'react';
import { Link } from 'react-scroll';
import dark from '../assets/images/dark.png'
import light from '../assets/images/light.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
  
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
            <Text>© {new Date().getFullYear()} SyncApp Tech. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Facebook'} href={'#'}>
                <BsFacebook color='#4da3f5'/>
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <BsInstagram color='#FF0080'/>
              </SocialButton>
              <SocialButton label={'Gmail'} href={'#'}>
                <SiGmail color='#df3030'/>
              </SocialButton>
              <SocialButton label={'Linkdin'} href={'#'}>
                <FaLinkedin color='#1e6df6'/>
              </SocialButton>
              <SocialButton label={'WhatsApp'} href={'#'}>
                <BsWhatsapp color='#32c365'/>
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }