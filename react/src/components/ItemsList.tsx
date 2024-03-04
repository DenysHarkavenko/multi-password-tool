import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Item from '../types/Item';

interface ItemsListProps {
  items: Item[];
  onItemClick: (item: Item) => void;
}

const ItemsList: React.FC<ItemsListProps> = ({ items, onItemClick }) => {
  return (
    <Box>
      {items.map((item: Item, index: number) => (
        <Box
          key={index}
          mb={4}
          p={2}
          color='#fff'
          cursor='pointer'
          onClick={() => onItemClick(item)}
        >
          <Heading fontSize='25px'>{item.appName}</Heading>
          <Text>{item.mail}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default ItemsList;

