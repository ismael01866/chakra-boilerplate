import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import theme from './theme';

function App() {
  return <ChakraProvider theme={theme}>React app</ChakraProvider>;
}

export default App;
