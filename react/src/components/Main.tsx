import { Flex, Box } from '@chakra-ui/react';
import CreateItem from './CreateItem';
import ChangeItem from './ChangeItem';
import ItemsList from './ItemsList';
import SelectedItemDetails from './SelectedItemDetails';
import useItemManagement from '../hooks/useItemManagement';

const Main = (): JSX.Element => {
  const {
    items,
    selectedItem,
    isEditing,
    addItem,
    handleItemClick,
    handleEditClick,
    handleDeleteItem,
    handleEditItem,
  } = useItemManagement();

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
        onClose={() => isEditing(false)}
        item={selectedItem}
        onSave={handleEditItem}
      />
    </Flex>
  );
};

export default Main;
