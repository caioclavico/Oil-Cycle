import {
  Center,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { Menu } from "./Menu";

export const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
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
    >
      {isLargerThan769 ? (
        <>
          <Flex>
            <Center>
              <Image src={logo} h="72px" w="89" />
            </Center>
          </Flex>
          <Flex alignItems="flex-end">
            <HStack spacing="5">
              <Text
                as="button"
                onClick={() => history.push("/")}
                _hover={{ transform: "translateY(-4px)" }}
              >
                INICIO
              </Text>
              <Text
                as="button"
                onClick={() => history.push("/")}
                _hover={{ transform: "translateY(-4px)" }}
              >
                QUEM SOMOS
              </Text>
              <Text
                as="button"
                onClick={() => history.push("/")}
                _hover={{ transform: "translateY(-4px)" }}
              >
                COMO FUNCIONA
              </Text>
              <Text
                as="button"
                onClick={() => history.push("/")}
                _hover={{ transform: "translateY(-4px)" }}
              >
                CONTATOS
              </Text>
              <Text
                as="button"
                onClick={() => history.push("/register")}
                _hover={{ transform: "translateY(-4px)" }}
              >
                CADASTRO
              </Text>
            </HStack>
          </Flex>
        </>
      ) : (
        <>
          <Flex>
            <Center as="button" onClick={onToggle}>
              <GiHamburgerMenu />
            </Center>

            <Center>
              <Image src={logo} h="72px" w="89" />
            </Center>
          </Flex>
          <Menu isOpen={isOpen} onClose={onClose} />
        </>
      )}

      <Flex>
        <Center
          flexDirection="column"
          as="button"
          onClick={() => history.push("/login")}
        >
          <FaUserCircle style={{ width: "27px", height: "28px" }} />
          <Text>Login</Text>
        </Center>
      </Flex>
    </Flex>
  );
};
