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
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { ProductCard } from "../../components/ProductCard";
import { useSell } from "../../contexts/SellOilRequest";
import { useEffect, useState } from "react";

export const BuyerDashboard = () => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  const { signOut } = useAuth();
  const { product, getOilSeller } = useSell();

  useEffect(() => {
    getOilSeller();
  }, [product]);

  console.log(product);
  return (
    <>
      {isLargerThan769 ? (
        <Flex flexDirection="column" position="relative" top="70px">
          <Center
            bgColor="#19F59A"
            height="300px"
            width="100%"
            display={["none", "none", "flex", "flex"]}
          >
            <Image src={saveEarth} height="inherit" backgroundSize="cover" />
          </Center>
          <Flex
            flexDirection="column"
            alignItems="stretch"
            maxWidth="1160px"
            margin="23px auto"
          >
            <Heading
              fontFamily="Fauna One"
              fontSize="30px"
              textAlign="center"
              bgColor="#F2ECEC"
              padding={4}
            >
              Veja abaixo os vendedores disponíveis!
            </Heading>
            <Flex
              alignItems="center"
              bgColor="rgba(247, 242, 242, 0.9)"
              justifyContent="space-between"
            >
              <SimpleGrid columns={2}>
                <Text textAlign="center" columnCount="2" p="15px">
                  Compre o óleo de quem desejar agora mesmo, é muito fácil e
                  simples.
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
                </Text>
                <Text p="15px">
                  {" "}
                  2- No campo “informe a quantidade” coloque quantos litros de
                  óleo você
                  <br />
                  gostaria de retirar e clique em adicionar.
                  <br />
                  <br />
                  3- Após escolher todos os vendedores navegue até seu carrinho,
                  caso <br />
                  esteja tudo certo clique em concluir. Você receberá o contato
                  do <br />
                  vendedor para combinar a retirada.
                </Text>
              </SimpleGrid>
              <Center padding={3} height="181px">
                <Image src={OilShopping} maxWidth="339px" />
              </Center>
            </Flex>
          </Flex>
          <Flex
            position="relative"
            top="100px"
            justifyContent="center"
            m="0 auto"
            flexDirection="column"
            gap={5}
          >
            {product.map((item) => (
              <ProductCard
                name={item.name}
                city={item.city}
                cep={item.CEP}
                state={item.state}
                amountOfOil={item.amountOfOil}
              />
            ))}
          </Flex>
        </Flex>
      ) : (
        <>
          <Flex
            bg="gray.10"
            w="100%"
            h="2500"
            color="primary.main"
            justifyContent="center"
          >
            <Flex
              bg="secondary.main"
              w="100%"
              h="106px"
              color="primary.main"
              p="6"
              position="fixed"
              top="90px"
              zIndex="100"
              justifyContent="space-between"
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
                  top="16px"
                  zIndex="3"
                  left="24px"
                  color="#EA0404"
                >
                  1
                </Text>
                <Image
                  src={cart}
                  w="50px"
                  h="50px"
                  maxWidth="initial"
                  left={["50px", "120px", "400px"]}
                />
              </Flex>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
};
