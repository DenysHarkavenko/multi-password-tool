import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from '@chakra-ui/react';
import Item from '../types/Item';

interface ChangeItemProps {
  isOpen: boolean;
  onClose: () => void;
  item: Item | null;
  onSave: (editedItem: Item) => void;
}

const ChangeItem: React.FC<ChangeItemProps> = ({ isOpen, onClose, item, onSave }) => {
  const [editedItem, setEditedItem] = useState<Item | null>(null);

  useEffect(() => {
    setEditedItem(item);
  }, [item]);

  const handleEditItem = (): void => {
    if (editedItem) {
      onSave(editedItem);
      onClose();
    }
  };

  const handleChange = (key: keyof Item, value: string): void => {
    if (editedItem) {
      setEditedItem({ ...editedItem, [key]: value });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg='#40827A' color='#fff'>
        <ModalHeader>Edit item</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>App name</FormLabel>
            <Input
              placeholder='GitHub'
              _placeholder={{ color: '#4A4A4A' }}
              value={editedItem?.appName || ''}
              onChange={(e) => handleChange('appName', e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Login</FormLabel>
            <Input
              placeholder='username123123'
              _placeholder={{ color: '#4A4A4A' }}
              value={editedItem?.login || ''}
              onChange={(e) => handleChange('login', e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Mail</FormLabel>
            <Input
              placeholder='example@gmail.com'
              _placeholder={{ color: '#4A4A4A' }}
              value={editedItem?.mail || ''}
              onChange={(e) => handleChange('mail', e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder='password_219!'
              _placeholder={{ color: '#4A4A4A' }}
              value={editedItem?.password || ''}
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleEditItem} bg='#fff'>
            Save changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChangeItem;
