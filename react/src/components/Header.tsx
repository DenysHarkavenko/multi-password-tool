import { Flex, Heading, Input } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex
      as='header'
      bg='#40827A'
      minH='80px'
      h='100%'
      borderBottom='3px solid #1BDCD0'
    >
      <Flex
        maxW='300px'
        w='100%'
        borderRight='3px solid #1BDCD0'
        minH='inherit'
        p='0 20px'
        align='center'
      >
        <Input
          borderRadius='20px'
          color='#fff'
          _focus={{
            boxShadow: 'none',
            border: '#1BDCD0 2px solid',
          }}
        />
      </Flex>
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
  )
}

export default Header
