import {
  Avatar,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import happyShopping from "../../assets/shop/happy-shopping.png";
import coins from "../../assets/shop/coins.png";
import { HeaderDashboard } from "../Dashboard/header-dashboard";
import { productsGiftCards, productsHome, productsYou } from "./products";
import { ShopCard } from "../../components/ShopCard";
import cartShop from "../../assets/cart.png";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { ModalSeller } from "../../components/ModalSeller";

export const ShopPage = () => {
  const [isLargerThan767] = useMediaQuery("(min-width: 767px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signOut, user } = useAuth();
  const { cart } = useCart();
  return (
    <Box width="100vw">
      <HeaderDashboard />
      <ModalSeller isOpen={isOpen} onClose={onClose} />
      {isLargerThan767 ? (
        <Flex
          justifyContent="center"
          alignItems="center"
          width="100%"
          bgColor="rgba(237, 194, 1, 0.9)"
          height="400px"
        >
          <Image
            src={happyShopping}
            objectFit="contain"
            position="absolute"
            top="80px"
            zIndex="1"
            maxWidth="600px"
          />
          <Image src={coins} position="absolute" maxWidth="500px" />
        </Flex>
      ) : (
        <Flex
          bg="gray.10"
          w="100%"
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
                  Olá {user.name}
                </Text>
                <Text color="primary.main">
                  <Link onClick={onOpen}>Ver meu perfil</Link> |{" "}
                  <Link onClick={signOut}>Sair</Link>
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
                {cart.length}
              </Text>
              <Image
                src={cartShop}
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
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        flexDirection="column"
        marginTop={["0px", "0px", "180px"]}
        position="relative"
        top={["220px", "220px", "80px"]}
      >
        <Heading fontFamily="Fauna One" textAlign={["center", "center"]}>
          Troque aqui seus Oil Points !
        </Heading>
        <Text marginTop="50px" paddingX={[6, 6, 0]}>
          Você pode trocar seus Oil Points por qualquer produto ou cupom de
          desconto da nossa lista de parceiros. <br />
          <br /> Basta navegar pela página e escolher o que mais lhe agradar e
          clicar em “Eu quero! ” é importe que você tenha a quantidade de Oil
          Points exigida para adiquirar cada item ok?!
        </Text>
        <Flex width={["auto", "auto", "100%"]} paddingX={[0, 0, "60px"]}>
          <Heading fontFamily="Fauna One" marginY={10}>
            Para sua casa
          </Heading>
        </Flex>
        <Grid
          w="100%"
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={10}
          paddingX="8"
          mt="8"
          justifyItems="center"
        >
          {productsHome.map((product) => (
            <ShopCard
              key={product.name}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </Grid>
        <Heading fontFamily="Fauna One" marginY={10}>
          Para sua casa
        </Heading>
        <Grid
          w="100%"
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={10}
          paddingX="8"
          mt="8"
          justifyItems="center"
        >
          {productsYou.map((product) => (
            <ShopCard
              key={product.name}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </Grid>
        <Heading fontFamily="Fauna One" marginY={10}>
          Para sua casa
        </Heading>
        <Grid
          w="100%"
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={10}
          paddingX="8"
          mt="8"
          justifyItems="center"
        >
          {productsGiftCards.map((product) => (
            <ShopCard
              key={product.name}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
