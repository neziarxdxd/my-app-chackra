import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,

} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {AirbnbExample} from './AirbnbExample';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
        
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
         
          <Text fontSize='6xl' fontWeight='900'>Rai Sangalang</Text>   
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <AirbnbExample/>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
