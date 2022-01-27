import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

interface IMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
export const Menu = ({ isOpen, onClose }: IMenuProps) => {
  const history = useHistory();

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Oil Cycle</DrawerHeader>
        <DrawerBody>
          <VStack spacing="5">
            <Text as="button" onClick={() => history.push("/")}>
              INICIO
            </Text>
            <Text as="button" onClick={() => history.push("/")}>
              QUEM SOMOS
            </Text>
            <Text as="button" onClick={() => history.push("/")}>
              COMO FUNCIONA
            </Text>
            <Text as="button" onClick={() => history.push("/")}>
              CONTATOS
            </Text>
            <Text as="button" onClick={() => history.push("/register")}>
              CADASTRO
            </Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
