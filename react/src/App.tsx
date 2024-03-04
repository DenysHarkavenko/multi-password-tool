import { Avatar, Box, ChakraProvider, Flex, Heading } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box minH='100vh' bg='#26554F' display='flex' flexDirection='column'>
        <Flex
          as='header'
          bg='#40827A'
          minH='80px'
          h='100%'
          borderBottom='3px solid #1BDCD0'
        >
          <Box
            maxW='300px'
            w='100%'
            borderRight='3px solid #1BDCD0'
            minH='inherit'
          >
            asd
          </Box>
          <Flex
            direction='row'
            minH='100%'
            w='100%'
            alignItems='center'
            p='0 50px'
            justify='space-between'
          >
            <Heading color='#fff'>Multi-Password Tool</Heading>
            {/* User profile */}
            {/* <Flex>
              <Heading>Nickname</Heading>
              <Avatar />
            </Flex> */}
          </Flex>
        </Flex>
        <Flex flex='1' direction='row'>
          <Box
            maxW='300px'
            w='100%'
            bg='#40827A'
            minH='100%'
            borderRight='3px solid #1BDCD0'
          >
            asd
            <br />
            asd
          </Box>
          <Box flex='1'>Some Content</Box>
        </Flex>
        <Box bg='#40827A' borderTop='3px solid #1BDCD0'>
          Hello
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App
