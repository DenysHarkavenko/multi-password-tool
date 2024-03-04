import { useState } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import CreateItem from './UI/CreateItem'
import Item from '../types/Item'

const Main = (): JSX.Element => {
  const [items, setItems]: [Item[], (items: Item[]) => void] = useState<Item[]>(
    []
  )

  const addItem = (newItem: Item): void => {
    setItems([...items, newItem])
  }

  console.log(items)

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
        <Box>
          {items.map((item: Item, index: number) => (
            <Box key={index} mb={4} p={2} bg='#2A5B55' color='#fff'>
              <p>{`App name: ${item.appName}`}</p>
              <p>{`Mail: ${item.mail}`}</p>
            </Box>
          ))}
        </Box>
        <Box>
          <CreateItem addItem={addItem} />
        </Box>
      </Flex>
      <Box flex='1'>Some Content</Box>
    </Flex>
  )
}

export default Main
