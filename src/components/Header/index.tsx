import {
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory, useLocation, useParams } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { Menu } from "./Menu";

export const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  const history = useHistory();
  const location = useLocation();
  let isHome = true;

  if (location.pathname !== "/") {
    isHome = false;
  }

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
      {isLargerThan769 ? (
        <>
          <Flex>
            <Center>
              <Image src={logo} h="72px" w="89" />
            </Center>
          </Flex>
          <Flex alignItems="flex-end">
            <HStack spacing="5">
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link href="#">INICIO</Link>
                ) : (
                  <Link href="/">INICIO</Link>
                )}
              </Text>
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link href="#about-us">QUEM SOMOS</Link>
                ) : (
                  <Link href="/#about-us">QUEM SOMOS</Link>
                )}
              </Text>
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link href="#how-it-works">COMO FUNCIONA</Link>
                ) : (
                  <Link href="/#how-it-works">COMO FUNCIONA</Link>
                )}
              </Text>
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link href="#contact">CONTATOS</Link>
                ) : (
                  <Link href="/#contact">CONTATOS</Link>
                )}
              </Text>
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link href="#register">CADASTRO</Link>
                ) : (
                  <Link href="/#register">CADASTRO</Link>
                )}
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
