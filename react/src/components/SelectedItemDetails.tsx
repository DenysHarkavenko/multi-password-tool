// SelectedItemDetails.tsx
import React from 'react';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import Item from '../types/Item';

interface SelectedItemDetailsProps {
  selectedItem: Item;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const SelectedItemDetails: React.FC<SelectedItemDetailsProps> = ({ selectedItem, onEditClick, onDeleteClick }) => {
  const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }
    return new Date(date).toLocaleDateString(undefined, options)
  }

  return (
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
            mr='4'
            onClick={onEditClick}
          >
            Edit
          </Button>
          <Button
            bg='#26554F'
            color='#fff'
            borderRadius='20px'
            p='9px 35px'
            _hover={{ background: '#40827A' }}
            onClick={onDeleteClick}
          >
            Delete
          </Button>
        </Box>
      </Flex>
      <Text mt='40px' fontSize='20px'>
        Last modified: {formatDate(selectedItem.wasChangedAt)}
      </Text>
      <Text fontSize='20px'>
        Created: {formatDate(selectedItem.createdAt)}
      </Text>
    </Box>
  );
};

export default SelectedItemDetails;

