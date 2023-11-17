import { ReactIcon } from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  useDisclosure,
  FormControl,
  SimpleGrid,
  GridItem,
  Input,
} from '@chakra-ui/react'
import { useRef } from 'react'

export default function SignInModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef(null)

  return (
    <>



      <Button onClick={onOpen}
        bg={{ base: 'none', md: 'blue' }}
        _focus={{
          background: 'none'
        }}

        color={{ base: 'blue', md: 'white' }}
        leftIcon={<ReactIcon />}>Sign In</Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent

        >
          <ModalHeader>
            
          </ModalHeader>
          <ModalCloseButton/>
          <ModalBody>

            <form>
              <SimpleGrid column={2} gap={2} rowGap={5}>

                <GridItem>
                  <FormControl>
                    <Input type='email' placeholder='Enter email here...'/>
                  </FormControl>

                </GridItem>
                <GridItem>
                  <FormControl>
                    <Input type='password' placeholder='Enter password here...'/>
                  </FormControl>

                </GridItem>
                <GridItem >
                  <Button w='full'>SignIn</Button>

                </GridItem>
              </SimpleGrid>
            </form>
          </ModalBody>

          <ModalFooter>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}