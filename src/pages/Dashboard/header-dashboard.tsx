import {
  Avatar,
  background,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/Logo.png";
import cart from "../../assets/cart.png";
import { IoSearchCircle } from "react-icons/io5";
import { useAuth } from "../../contexts/AuthContext";

export const HeaderDashboard = () => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  const { signOut } = useAuth();
  const history = useHistory();

  return (
    <Flex
      h="72px"
      flexDirection="row"
      border="1px solid black"
      justifyContent="space-between"
      px="5"
      py="1"
      bg="gray.10"
      boxShadow="0px 1px 4px"
      position="fixed"
      width="100%"
      zIndex="100"
    >
      <HStack spacing="18" width="100%" mr={["0", "0", "10"]}>
        <Flex>
          <Center>
            <Image src={logo} h="72px" w="89" />
          </Center>
        </Flex>

        <InputGroup alignItems="center" w="100%" justifyContent="center">
          <Input
            maxWidth="926px"
            type="text"
            bgColor="white"
            h="59px"
            placeholder="Digite sua cidade e procure por vendedores  "
          />

          <InputRightElement
            as="button"
            position="relative"
            right={["-7px", "-7px", "60px"]}
            width="auto"
          >
            <IoSearchCircle
              style={{
                width: "54px",
                height: "48px",
                color: "#039F61",
                padding: "0px, 7px",
              }}
            />
          </InputRightElement>
        </InputGroup>
        {isLargerThan769 && (
          <>
            <Flex
              alignItems="center"
              minWidth="207px"
              position="relative"
              right="20px"
            >
              <Avatar name="Nome Dinamico" src="" />
              <Flex flexDirection="column" ml="5">
                <Text color="primary.main" fontWeight="700">
                  Olá João
                </Text>
                <Text color="primary.main">
                  <Link>Ver meu perfil</Link> |{" "}
                  <Link onClick={() => signOut}>Sair</Link>
                </Text>
              </Flex>
            </Flex>
            <Flex position="relative" alignItems="center">
              <Text
                position="absolute"
                left="24px"
                top="12px"
                zIndex="3"
                color="#EA0404"
              >
                1
              </Text>
              <Image src={cart} w="50px" h="50px" maxWidth="initial" />
            </Flex>
          </>
        )}
      </HStack>
    </Flex>
  );
};
