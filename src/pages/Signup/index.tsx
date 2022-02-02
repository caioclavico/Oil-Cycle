import { Button, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import oilBg from "../../assets/oleo2.jpg";
import { Header } from "../../components/Header";

export const Signup = () => {
  const history = useHistory();

  return (
    <>
      <Flex
        id="about-us"
        h="100vh"
        justifyContent={["flex-start", "flex-start", "center"]}
        position="relative"
        bgImage={oilBg}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Text id="register" position="absolute" top="-70px"></Text>
        <Flex
          flexDirection="column"
          alignItems="center"
          bg="rgba(254, 251, 251, 0.85)"
          justifyContent="center"
          alignSelf="center"
          textAlign="center"
          padding="5"
          h={["100%", "100%", "451px"]}
          w={["100%", "100%", "700px"]}
        >
          <VStack spacing="6">
            <Heading fontFamily="bodySecondary">Cadastro</Heading>
            <Text>
              Escolha qual será o perfil de seu cadastro, se deseja comprar óleo
              para reciclar escolha “comprador” ou se deseja vender óleo para
              reciclagem escolha “vendedor”.
            </Text>
            <Button onClick={() => history.push("/registerBuyer")}>
              COMPRADOR
            </Button>
            <Button onClick={() => history.push("/registerSeller")}>
              VENDEDOR
            </Button>
          </VStack>
          <Flex
            position="relative"
            top={["30px", "60px", "65px"]}
            left={["0px", "0", "279px"]}
          >
            <Text fontSize="18">
              Ir para o{" "}
              <Link color="primary.main" onClick={() => history.push("/login")}>
                login
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
