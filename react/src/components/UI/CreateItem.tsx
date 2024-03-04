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
} from '@chakra-ui/react'
import React from 'react'

const CreateItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
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
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Login</FormLabel>
              <Input
                placeholder='username123123'
                _placeholder={{ color: '#4A4A4A' }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Mail</FormLabel>
              <Input
                placeholder='example@gmail.com'
                _placeholder={{ color: '#4A4A4A' }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder='password_219!'
                _placeholder={{ color: '#4A4A4A' }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} bg='#fff'>
              Create item
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateItem
