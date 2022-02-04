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
import { useLocation } from "react-router-dom";

interface IMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: IMenuProps) => {
  const location = useLocation();
  let isHome = true;

  if (location.pathname !== "/") {
    isHome = false;
  }

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Oil Cycle</DrawerHeader>
        <DrawerBody>
          <VStack spacing="5">
            <Text as="button">
              {isHome ? (
                <Link href="#">INICIO</Link>
              ) : (
                <Link href="/">INICIO</Link>
              )}
            </Text>
            <Text as="button">
              {isHome ? (
                <Link href="#about-us">QUEM SOMOS</Link>
              ) : (
                <Link href="/#about-us">QUEM SOMOS</Link>
              )}
            </Text>
            <Text as="button">
              {isHome ? (
                <Link href="#how-it-works">COMO FUNCIONA</Link>
              ) : (
                <Link href="/#how-it-works">COMO FUNCIONA</Link>
              )}
            </Text>
            <Text as="button">
              {isHome ? (
                <Link href="#contact">CONTATOS</Link>
              ) : (
                <Link href="/#contact">CONTATOS</Link>
              )}
            </Text>
            <Text as="button">
              {isHome ? (
                <Link href="#register">CADASTRO</Link>
              ) : (
                <Link href="/#register">CADASTRO</Link>
              )}
            </Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
