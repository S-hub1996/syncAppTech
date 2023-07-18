import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,

} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box  position={'fixed'}
    w={'100%'}
    zIndex={2} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>SyncAppTech</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}