import {
  useDisclosure,
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
import React, { useRef, useState } from 'react';
import Item from '../../types/Item'

interface CreateItemProps {
  addItem: (newItem: Item) => void;
}

const CreateItem: React.FC<CreateItemProps> = ({ addItem }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef<HTMLInputElement | null>(null);
  const finalRef = useRef<HTMLInputElement | null>(null);

  const [appName, setAppName] = useState('');
  const [login, setLogin] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateItem = () => {
    const newItem: Item = {
      appName: appName,
      login: login,
      mail: mail,
      password: password,
    };
    addItem(newItem);
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg='inherit'
        _hover={{ bg: 'none' }}
        p='0'
        color='#fff'
        fontSize='24px'
      >
        Add new password
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg='#40827A' color='#fff'>
          <ModalHeader>Add new password</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>App name</FormLabel>
              <Input
                ref={initialRef}
                placeholder='GitHub'
                _placeholder={{ color: '#4A4A4A' }}
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Login</FormLabel>
              <Input
                placeholder='username123123'
                _placeholder={{ color: '#4A4A4A' }}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Mail</FormLabel>
              <Input
                placeholder='example@gmail.com'
                _placeholder={{ color: '#4A4A4A' }}
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder='password_219!'
                _placeholder={{ color: '#4A4A4A' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleCreateItem} bg='#fff'>
              Create item
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateItem;
