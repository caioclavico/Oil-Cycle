import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import oilHome from "../../assets/oil-home.jpg";
import oilBg from "../../assets/oleo2.jpg";
import { Header } from "../../components/Header";

export const Home = () => {
  const history = useHistory();
  const [isLargerThan769] = useMediaQuery("(min-width: 768px)");

  let responsive = {
    backgroundImage: "",
    backgroundColor: "",
    backgroundButton: "",
  };

  if (isLargerThan769) {
    responsive.backgroundImage = oilHome;
    responsive.backgroundColor = "";
    responsive.backgroundButton = "rgba(25, 245, 154, 0.8)";
  } else {
    responsive.backgroundColor = "#EDC201";
    responsive.backgroundImage = "";
    responsive.backgroundButton = "primary.main";
  }

  return (
    <Box width="100vw">
      <Header />
      <Flex flexDirection="column" position="relative" top="70px">
        <Flex
          flexDirection="column"
          h="100vh"
          justifyContent={["flex-start", "flex-start", "center"]}
          bgImage={responsive.backgroundImage}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <VStack mt="4" spacing={["4", "4", "10"]}>
            <Heading
              fontSize={["20px", "30px", "48px"]}
              fontFamily="bodySecondary"
              fontWeight="400"
            >
              NOSSO IMPACTO NO MUNDO
            </Heading>
            <Flex
              textAlign="center"
              backgroundColor={responsive.backgroundColor}
              width="100%"
              justifyContent="center"
            >
              <HStack spacing="5" flexDirection={["column", "column", "row"]}>
                <Box>
                  <Text
                    color="primary.main"
                    fontSize={["48px", "48px", "30px", "48px"]}
                  >
                    285 mil
                  </Text>
                  <Text textStyle="body600">COMPRADORES</Text>
                </Box>
                <Box>
                  <Text
                    color="primary.main"
                    fontSize={["48px", "48px", "30px", "48px"]}
                  >
                    385 mil
                  </Text>
                  <Text textStyle="body600">VENDEDORES</Text>
                </Box>
                <Box>
                  <Text
                    color="primary.main"
                    fontSize={["48px", "48px", "30px", "48px"]}
                  >
                    885 mil/L
                  </Text>
                  <Text textStyle="body600">DE ÓLEO RECICLADO</Text>
                </Box>
                <Box>
                  <Text
                    color="primary.main"
                    fontSize={["48px", "48px", "30px", "48px"]}
                  >
                    7.125.000M/L
                  </Text>
                  <Text textStyle="body600">
                    DE ÁGUA LIVRE DE RESIDUOS DE ÓLEO
                  </Text>
                </Box>
              </HStack>
            </Flex>
            <Button
              onClick={() => history.push("/login")}
              w="100%"
              maxWidth="738px"
              h="84px"
              bgColor={responsive.backgroundButton}
              borderRadius="35px"
              boxShadow="0px 0px 12px 0px"
            >
              <Text fontSize={["20px", "20px", "37px"]}>
                VEM RECICLAR COM A GENTE!
              </Text>
            </Button>
          </VStack>
        </Flex>
        <Flex
          h="100vh"
          justifyContent={["flex-start", "flex-start", "center"]}
          position="relative"
        >
          <Heading
            fontSize={["20px", "30px", "48px"]}
            fontFamily="bodySecondary"
            fontWeight="400"
          >
            <Text id="about-us" position="absolute" top="-70px"></Text>
            SOBRE NÓS
          </Heading>
        </Flex>
        <Flex h="100vh" justifyContent={["flex-start", "flex-start", "center"]}>
          <Heading
            fontSize={["20px", "30px", "48px"]}
            fontFamily="bodySecondary"
            fontWeight="400"
            position="relative"
          >
            <Text id="how-it-works" position="absolute" top="-70px"></Text>
            COMO FUNCIONA
          </Heading>
        </Flex>
        <Flex h="100vh" justifyContent={["flex-start", "flex-start", "center"]}>
          <Heading
            fontSize={["20px", "30px", "48px"]}
            fontFamily="bodySecondary"
            fontWeight="400"
            position="relative"
          >
            <Text id="contact" position="absolute" top="-70px"></Text>
            CONTATO
          </Heading>
        </Flex>
        <Flex h="100vh" justifyContent={["flex-start", "flex-start", "center"]}>
          <Heading
            fontSize={["20px", "30px", "48px"]}
            fontFamily="bodySecondary"
            fontWeight="400"
            position="relative"
          >
            <Text id="register" position="absolute" top="-70px"></Text>
            <Link onClick={() => history.push("/signup")}>REGISTRO</Link>
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
};
