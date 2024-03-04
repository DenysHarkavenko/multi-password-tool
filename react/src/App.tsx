import { Box, ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <ChakraProvider>
      <Box minH='100vh' bg='#26554F' display='flex' flexDirection='column'>
        <Header />
        <Main />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App
