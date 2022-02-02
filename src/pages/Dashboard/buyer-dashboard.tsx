import { HeaderDashboard } from "./header-dashboard";
import { useAuth } from "../../contexts/AuthContext";
import cart from "../../assets/cart.png";
import saveEarth from "../../assets/save-earth.png";
import OilShopping from "../../assets/oilshopping.png";

import {
  Flex,
  Text,
  Avatar,
  Link,
  Image,
  useMediaQuery,
  Center,
  Heading,
} from "@chakra-ui/react";

export const BuyerDashboard = () => {
  const [isSmallThan769] = useMediaQuery("(max-width: 769px)");
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  const { signOut } = useAuth();
  return (
    <>
      <HeaderDashboard />
      {isLargerThan769 ? (
        <>
          <Center
            bgColor="#19F59A"
            height="300px"
            position="relative"
            top="70px"
            display={["none", "none", "flex", "flex"]}
          >
            <Image src={saveEarth} height="inherit" />
          </Center>

          <Heading
            fontFamily="Fauna One"
            fontSize="30px"
            textAlign="center"
            bgColor="#F2ECEC"
            position="absolute"
            top="420px"
            left="630px"
            padding={4}
          >
            Veja abaixo os vendedores disponíveis!
          </Heading>

          <Text position="absolute" top="520px" left="630px">
            Compre o óleo de quem desejar agora mesmo, é muito fácil e simples.
            <br />
            <br />
            1- Escolha o vendedor do qual gostaria de adiquirir o óleo
            reciclável,
            <br />
            observe que já está disponível o endereço para retirada e a
            quantidade
            <br />
            de óleo que será possivel retirar.
            <br />
            <br />
            2- No campo “informe a quantidade” coloque quantos litros de óleo
            você
            <br />
            gostaria de retirar e clique em adicionar.
            <br />
            <br />
            3- Após escolher todos os vendedores navegue até seu carrinho, caso{" "}
            <br />
            esteja tudo certo clique em concluir. Você receberá o contato do{" "}
            <br />
            vendedor para combinar a retirada.
          </Text>

          <Center padding={8}>
            <Image
              src={OilShopping}
              maxWidth="400px"
              position="absolute"
              top="450px"
              left="1100px"
            />
          </Center>
        </>
      ) : (
        <Flex
          bg="gray.10"
          w="100%"
          h="2500"
          color="primary.main"
          justifyContent="center"
        >
          <Flex
            bg="secondary.main"
            w={["340px", "500px", "740px"]}
            h="106px"
            color="primary.main"
            p="6"
            position="fixed"
            top="90px"
            left="12px"
            zIndex="100"
          >
            <Flex
              alignItems="center"
              minWidth="207px"
              position="relative"
              right="0px"
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
                top="24px"
                zIndex="3"
                left={["75px", "145px", "425px"]}
                color="#EA0404"
              >
                1
              </Text>
              <Image
                src={cart}
                w="50px"
                h="50px"
                maxWidth="initial"
                position="absolute"
                left={["50px", "120px", "400px"]}
                top="10px"
              />
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};
