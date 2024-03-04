import { useState } from 'react'
import { Flex, Box, Heading, Text, Button } from '@chakra-ui/react'
import CreateItem from './UI/CreateItem'
import Item from '../types/Item'

const Main = (): JSX.Element => {
  const [items, setItems]: [Item[], (items: Item[]) => void] = useState<Item[]>(
    []
  )
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const addItem = (newItem: Item): void => {
    setItems([...items, newItem])
  }

  const handleItemClick = (item: Item): void => {
    setSelectedItem(item)
  }

  const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }
    return new Date(date).toLocaleDateString(undefined, options)
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
            <Box
              key={index}
              mb={4}
              p={2}
              color='#fff'
              cursor='pointer'
              onClick={() => handleItemClick(item)}
            >
              <Heading fontSize='25px'>{item.appName}</Heading>
              <Text>{item.mail}</Text>
            </Box>
          ))}
        </Box>
        <Box>
          <CreateItem addItem={addItem} />
        </Box>
      </Flex>
      <Box w='100%'>
        {selectedItem && (
          <Box bg='#40827A' m='50px' p='40px' borderRadius='20px' color='#fff'>
            <Heading fontSize='40px' mb='30px'>
              {selectedItem.appName}
            </Heading>
            <Flex bg='#7ABFAA' borderRadius='20px' maxW='fit-content'>
              <Box p='40px 15px'>
                <Text fontSize='18px'>
                  Login:
                  <br />
                  {selectedItem.login}
                </Text>
                <Text fontSize='18px'>
                  Mail:
                  <br />
                  {selectedItem.mail}
                </Text>
                <Text fontSize='18px'>
                  Password:
                  <br />
                  {selectedItem.password}
                </Text>
              </Box>
              <Box ml='80px' alignSelf='flex-end' p='40px'>
                <Button
                  bg='#26554F'
                  color='#fff'
                  borderRadius='20px'
                  p='9px 35px'
                  _hover={{ background: '#40827A' }}
                >
                  Change
                </Button>
              </Box>
            </Flex>
            <Text mt='40px' fontSize='20px'>
              Last modified: {formatDate(selectedItem.wasChangedAt)}
            </Text>
            <Text fontSize='20px'>Created: {formatDate(selectedItem.createdAt)}</Text>
          </Box>
        )}
      </Box>
    </Flex>
  )
}

export default Main
