import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

interface IMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
export const Menu = ({ isOpen, onClose }: IMenuProps) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Oil Cycle</DrawerHeader>
        <DrawerBody>
          <VStack spacing="5">
            <Text as="button">
              <Link href="#top">INICIO</Link>
            </Text>
            <Text as="button">
              <Link href="#about-us">QUEM SOMOS</Link>
            </Text>
            <Text as="button">
              <Link href="#how-it-works">COMO FUNCIONA</Link>
            </Text>
            <Text as="button">
              <Link href="#contact">CONTATOS</Link>
            </Text>
            <Text as="button">
              <Link href="#register">CADASTRO</Link>
            </Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
