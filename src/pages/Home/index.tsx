import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { useHistory, useLocation } from "react-router-dom";
import oilHome from "../../assets/oil-home.png";
import oilBg from "../../assets/oleo2.jpg";
import { Header } from "../../components/Header";
import caio from "../../assets/caio.png";
import gabriel from "../../assets/gabriel.png";
import ian from "../../assets/ian.jpeg";
import robert from "../../assets/robert.jpeg";
import samuel from "../../assets/samuel.jpeg";
import victor from "../../assets/victor.jpeg";

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
        <Flex justifyContent={["flex-start", "flex-start", "center"]}>
          <Heading
            fontSize={["20px", "30px", "48px"]}
            fontFamily="bodySecondary"
            fontWeight="400"
            textAlign="center"
          >
            <Text id="about-us" mt="10px">
              SOBRE NÓS
            </Text>
            <Text
              fontSize={["10px", "20px", "28px"]}
              mt="40px"
              fontFamily="body"
            >
              A Oil Cicly é formada por um grupo de jovens preocupados com o
              <br />
              meio ambiente e que por meio da tecnologia estão trabalhando para
              <br />
              alcançar solução de um grave problema: O descarte inconciente que
              <br />
              óleo usado de cozinha.
            </Text>
            <Text
              fontSize={["10px", "20px", "28px"]}
              mt="40px"
              fontFamily="body"
            >
              Em nosso dia a dia não percebemos mas esse descarte inadequado
              <br />
              é um problema muito grave que contamina nosso lar o planeta
              <br />
              Terra, para se ter noção 1 litro de óleo consegue contaminar 25
              mil
              <br />
              litros de água, isso é muito coisa !!
            </Text>
            <Text
              fontSize={["10px", "20px", "28px"]}
              mt="40px"
              mb={12}
              fontFamily="body"
            >
              Adote esse idéia, venha conosco e comece agora mesmo a
              <br />
              reciclar seu óleo de cozinha ajude o meio ambiente e aproveite os
              <br />
              beneficios super legais que a nossa plataforma proporciona.{" "}
            </Text>
            <HStack flexWrap="wrap" justifyContent="center" gap={4} mb="30px">
              <Center flexDirection="column" marginTop={10} width="250px">
                <Avatar size="2xl" src={samuel} />
                <Flex gap="10px" alignItems="center">
                  <Text textStyle="h1">Samuel Manga</Text>
                  <Link
                    href="https://www.linkedin.com/in/samuel-manga-rodrigues-09951b18a"
                    isExternal
                    color="#0e76a8"
                  >
                    <Center w="32px">
                      <FaLinkedin />
                    </Center>
                  </Link>
                </Flex>
                <Text textStyle="headline">Product Owner</Text>
              </Center>
              <Center flexDirection="column" marginY={10} width="250px">
                <Avatar size="2xl" src={caio} />
                <Flex gap="10px" alignItems="center">
                  <Text textStyle="h1">Caio Clavico</Text>
                  <Link
                    href="https://www.linkedin.com/in/caio-henrique-clavico-crizanto/"
                    isExternal
                    color="#0e76a8"
                  >
                    <Center w="32px">
                      <FaLinkedin />
                    </Center>
                  </Link>
                </Flex>
                <Text textStyle="headline">Scrom Master</Text>
              </Center>
              <Center flexDirection="column" marginY={10} width="250px">
                <Avatar size="2xl" src={victor} />
                <Flex gap="10px" alignItems="center">
                  <Text textStyle="h1">Victor Nunes</Text>
                  <Link
                    href="https://www.linkedin.com/in/victorncosta/"
                    isExternal
                    color="#0e76a8"
                  >
                    <Center w="32px">
                      <FaLinkedin />
                    </Center>
                  </Link>
                </Flex>
                <Text textStyle="headline">Team Leader</Text>
              </Center>
              <Center flexDirection="column" marginY={10} width="250px">
                <Avatar size="2xl" src={robert} />
                <Flex gap="10px" alignItems="center">
                  <Text textStyle="h1">Robert Popu</Text>
                  <Link
                    href="https://www.linkedin.com/in/robertpupo/"
                    isExternal
                    color="#0e76a8"
                  >
                    <Center w="32px">
                      <FaLinkedin />
                    </Center>
                  </Link>
                </Flex>
                <Text textStyle="headline">Quality Assurance</Text>
              </Center>
              <Center flexDirection="column" marginY={10} width="250px">
                <Avatar size="2xl" src={gabriel} />
                <Flex gap="10px" alignItems="center">
                  <Text textStyle="h1">Gabriel Ricardo</Text>
                  <Link
                    href="https://www.linkedin.com"
                    isExternal
                    color="#0e76a8"
                  >
                    <Center w="32px">
                      <FaLinkedin />
                    </Center>
                  </Link>
                </Flex>
                <Text textStyle="headline">Quality Assurance</Text>
              </Center>
              <Center flexDirection="column" marginY={10} width="250px">
                <Avatar size="2xl" src={ian} />
                <Flex gap="10px" alignItems="center">
                  <Text textStyle="h1">Ian Kuntz</Text>
                  <Link
                    href="https://www.linkedin.com"
                    isExternal
                    color="#0e76a8"
                  >
                    <Center w="32px">
                      <FaLinkedin />
                    </Center>
                  </Link>
                </Flex>
                <Text textStyle="headline">Quality Assurance</Text>
              </Center>
            </HStack>
          </Heading>
        </Flex>
        <Flex h="100vh" justifyContent={["flex-start", "flex-start", "center"]}>
          <Heading
            fontSize={["20px", "30px", "48px"]}
            fontFamily="bodySecondary"
            fontWeight="400"
            textAlign="center"
          >
            <Text id="how-it-works" mt="30px"></Text>
            COMO FUNCIONA
            <Text
              fontSize={["10px", "20px", "28px"]}
              mt="40px"
              fontFamily="body"
            >
              A Oil Cycle é a solução completa para reciclagem de óleo usado,
              aqui nós
              <br />
              ligamos quem recolhe e faz a reciclagem do óleo com aqueles que
              juntam e
              <br />
              acumulam esse óleo para descarte consciente.
            </Text>
            <Text
              fontSize={["10px", "20px", "28px"]}
              mt="40px"
              fontFamily="body"
            >
              <br />
              Se você tem interesse em comprar o óleo faça seu cadacastro como
              comprador preenchendo
              <br />
              corretamente as informações requisitadas, e pronto! Tudo certo
              para você iniciar
              <br />
              essa parceiria conosco.
            </Text>
            <Text
              fontSize={["10px", "20px", "28px"]}
              mt="40px"
              fontFamily="body"
            >
              Como comprador você terá acesso aos vendedores mais próximos de
              você e poderá
              <br />
              reservar o óleo que eles guardaram e agendar a retirada.
            </Text>
            <Text
              fontSize={["10px", "20px", "28px"]}
              mt="40px"
              fontFamily="body"
            >
              Se você tem interesse em disponibilizar o seu faça o cadastro
              <br />
              como vendedor, dessa forma sempre que você cadastrar um novo lote
              de óleo ficará
              <br />
              disponível para os possíveis compradores, ao vender seu óleo você
              ganhará Oil Points
              <br />
              que poderão ser trocados por variados produtos e cupons de
              desconto de nossa rede
              <br />
              de parceiros.
              <br />{" "}
            </Text>
          </Heading>
        </Flex>
        <Flex h="100vh" justifyContent={["flex-start", "flex-start", "center"]}>
          <Heading
            fontSize={["20px", "30px", "48px"]}
            fontFamily="bodySecondary"
            fontWeight="400"
            position="relative"
            textAlign="center"
          >
            <Text id="contact" position="absolute" top="-70px"></Text>
            CONTATO
            <Text
              fontSize={["10px", "20px", "28px"]}
              mt="40px"
              fontFamily="body"
            >
              Entre em contato conosco nos seguintes canais
              <br />
              Telefone: (11) 3244 - 5599
              <br />
              emil: contato@oilcicly.com.br
              <br />{" "}
            </Text>
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
