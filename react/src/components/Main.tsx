import { Flex, Box } from '@chakra-ui/react'
import CreateItem from './UI/CreateItem'

const Main = () => {
  return (
    <Flex flex='1' direction='row'>
      <Flex
        direction='column'
        maxW='300px'
        w='100%'
        bg='#40827A'
        minH='100%'
        borderRight='3px solid #1BDCD0'
        justify='space-between'
        p='25px 30px'
      >
        <Box></Box>
        <Box>
          <CreateItem />
        </Box>
      </Flex>
      <Box flex='1'>Some Content</Box>
    </Flex>
  )
}

export default Main
