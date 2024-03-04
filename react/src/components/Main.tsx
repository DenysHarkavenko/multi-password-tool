import { useState } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import CreateItem from './CreateItem'
import Item from '../types/Item'
import ChangeItem from './ChangeItem'
import ItemsList from './ItemsList'
import SelectedItemDetails from './SelectedItemDetails'

const Main = (): JSX.Element => {
  const [items, setItems]: [Item[], (items: Item[]) => void] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  const addItem = (newItem: Item): void => {
    setItems([...items, newItem])
  }

  const handleItemClick = (item: Item): void => {
    setSelectedItem(item)
    setIsEditing(false)
  }

  const handleEditClick = (): void => {
    setIsEditing(true)
  }

  const handleDeleteItem = (item: Item): void => {
    setItems(items.filter((i) => i !== item))
    setSelectedItem(null)
  }

  const handleEditItem = (editedItem: Item): void => {
    const updatedItems = items.map((item) => {
      if (item === selectedItem) {
        return editedItem
      }
      return item
    })
    setItems(updatedItems)
    setSelectedItem(editedItem)
    setIsEditing(false)
  }

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
        <ItemsList items={items} onItemClick={handleItemClick} />
        <Box>
          <CreateItem addItem={addItem} />
        </Box>
      </Flex>
      <Box w='100%'>
        {selectedItem && (
          <SelectedItemDetails
            selectedItem={selectedItem}
            onEditClick={handleEditClick}
            onDeleteClick={() => handleDeleteItem(selectedItem)}
          />
        )}
      </Box>
      <ChangeItem
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        item={selectedItem}
        onSave={handleEditItem}
      />
    </Flex>
  )
}

export default Main
