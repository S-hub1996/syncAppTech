import { React } from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  useDisclosure,
  HStack,
  IconButton,
  Image,

} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {Link} from 'react-scroll'
import NavLink from './NavLink';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import dark from '../assets/images/dark.png'
import light from '../assets/images/light.png'
const links = [
  { name: "Home", id: "test1" },
  { name: "About", id: "test2" },
  { name: "Services", id: "test3" },
  { name: "Contact", id: "test4" },
];


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode('light');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box  position={'fixed'}
    w={'full'}
    zIndex={2} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      

        <HStack spacing={4} alignItems={"center"}>
        <Link  activeClass="active"
            className="test1"
            to="test1"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}>
        {
          colorMode==='light'?  <Image src={light} m={'auto'} w={48}/>:<Image src={dark} w={48}/>
        }
      
           </Link>
         
        
  </HStack>
          <HStack as={"nav"}  spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.id}
                name={link.name}
                fontSize={15}
                onClick={() => onClose()}
              />
            ))}
          </HStack>
      
        
          <IconButton
          size={"md"}
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label={"Open Menu"}
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
          {/* <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex> */}
        </Flex>
        {isOpen ? (
        <Box
          pb={4}
          w={["100%", "100%", "80%"]}
          maxW={800}
          display={["inherit", "inherit", "none"]}
        >
          <Stack as={"nav"} spacing={4} alignItems="center" w="">
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.id}
                name={link.name}
                w="md"
                onClick={() => onClose() }
              />
            ))}
          </Stack>
        </Box>
      ) : null}
      </Box>
    </>
  );
}