import {
  Avatar,
  Center,
  Flex,
  Image,
  Link,
  Text,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/Logo.png";
import cartLogo from "../../assets/cart.png";
import { useAuth } from "../../contexts/AuthContext";
import { ModalSeller } from "../../components/ModalSeller";
import { ModalBuyer } from "../../components/ModalBuyer";
import { ModalCart } from "../../components/ModalCart";
import { useCart } from "../../contexts/CartContext";

export const HeaderDashboard = () => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  const { signOut, user } = useAuth();
  const { cart } = useCart();
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  let isBuyer = false;

  if ("CNPJ" in user) {
    isBuyer = true;
  }

  return (
    <>
      {isBuyer ? (
        <ModalBuyer isOpen={isOpen} onClose={onClose} />
      ) : (
        <ModalSeller isOpen={isOpen} onClose={onClose} />
      )}
      <ModalCart isOpen={isCartOpen} onClose={onCartClose} />

      <Flex
        h="72px"
        flexDirection="row"
        borderBottom="1px solid black"
        justifyContent="space-between"
        px="5"
        py="1"
        bg="gray.10"
        boxShadow="0px 1px 4px"
        position="fixed"
        width="100%"
        zIndex="100"
      >
        <Center as="button" onClick={() => history.push("/")}>
          <Image src={logo} h="72px" mb="15px" />
        </Center>

        {isLargerThan769 && (
          <Flex>
            <Flex
              alignItems="center"
              minWidth="207px"
              position="relative"
              right="20px"
            >
              <Avatar name={user.name} src="" />
              <Flex flexDirection="column" ml="5">
                <Text color="primary.main" fontWeight="700">
                  Olá {user.name}
                </Text>
                <Text color="primary.main">
                  <Link onClick={onOpen}>Ver meu perfil</Link> |{" "}
                  <Link onClick={signOut}>Sair</Link>
                </Text>
              </Flex>
            </Flex>
            <Flex
              position="relative"
              alignItems="center"
              as="button"
              onClick={onCartOpen}
            >
              <Center
                as="span"
                color="white"
                position="absolute"
                bottom="40px"
                left="36px"
                fontSize="0.8rem"
                fontWeight="900"
                bgColor="#EA0404"
                borderRadius="10px"
                zIndex={1}
                paddingX="6px"
                paddingY="2px"
              >
                {cart.length}
              </Center>
              <Image src={cartLogo} w="50px" h="50px" maxWidth="initial" />
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};
