import {
  Button,
  Center,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
// import './App.css'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <ChakraProvider>
      <Center w="100vw" h="100vh" className="App">
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Modal Body</Text>
              <Popover>
                <PopoverTrigger>
                  <Button>Trigger</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Popover Header</PopoverHeader>
                  <PopoverBody>
                    Popover Body
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </ChakraProvider>
  );
}

export default App;
