import React from 'react';
import './app.css'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import Home from './components/Home';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher ></ColorModeSwitcher>
      <Home />
    </ChakraProvider>
  );
}

export default App;
