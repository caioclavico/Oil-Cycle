import {
  Button,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
  Box,
  Image,
  Center,
  HStack,
  SlideFade,
  useMediaQuery,
} from "@chakra-ui/react";
import { Input } from "../../components/Input";
import gotaImg from "../../assets/gota.png";
import garrafasOleo from "../../assets/garrafas-oleo.png";
import dashboard02 from "../../assets/dashboard02.png";
import Online_shopping from "../../assets/Online_shopping_PNG.png";
import Investment from "../../assets/Investment_PNG.png";
import saveEarth from "../../assets/save-earth.png";
import { useState, useEffect } from "react";
import { useSell } from "../../contexts/SellOilRequest";
import { useForm } from "react-hook-form";

interface SaleData {
  seller: string;
  amountOfOil: number;
  userId: number;
}

export const SellerDashboard = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SaleData>();

  const Submit = (data: SaleData) => {
    addOilSeller(data);
  };

  const { addOilSeller } = useSell();
  const [inView, setInView] = useState(false);

  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 200;
      if (elementTop < windowHeight - elementVisible) {
        setInView(true);
      } else {
        setInView(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", reveal);
  }, []);

  const [isLargerThan769] = useMediaQuery("(min-width: 767px)");

  return (
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
      <Flex
        position="relative"
        top="100px"
        width="100vw"
        flexDirection="column"
        maxWidth="container.xl"
        alignItems="center"
        left="50%"
        transform="translateX(-50%)"
      >
        {isLargerThan769 ? (
          <Heading
            fontFamily="Fauna One"
            fontSize="30px"
            textAlign="center"
            bgColor="#F2ECEC"
            padding={4}
          >
            Tem óleo para vender ? Cadastre aqui e deixe disponível para os
            compradores!
          </Heading>
        ) : (
          <Heading
            fontFamily="Fauna One"
            fontSize="30px"
            textAlign="center"
            bgColor="#19F59A"
            padding={4}
            marginBottom={6}
          >
            Tem óleo para vender?
          </Heading>
        )}

        <Flex
          marginX={4}
          flexDirection={["column", "column", "row", "row"]}
          alignItems={["center", "center"]}
        >
          <HStack width={["100%", "100%", "70%", "70%"]}>
            <Center padding={6} display={["none", "none", "flex", "flex"]}>
              <Image
                src={garrafasOleo}
                maxWidth="320px"
                width={["120px", "150px", "200px", "320px"]}
              />
            </Center>
            {isLargerThan769 ? (
              <Text>
                Disponibilize seu óleo reclicável para os compradores, é muito
                fácil e simples.
                <br />
                <br />
                1- No campo ao lado coloque a quantidade de óleo que tem
                disponível, é importante que seja a partir de 2 litros e sempre
                um valor redondo, ex: 2L, 3L, 34L, 45L.
                <br />
                <br />
                2- Feito isso clique em “RECICLAR ÓLEO” e pronto seu anuncio com
                estará disponível para os compradores!
                <br />
                <br />
                Agora basta aguardar o contato dos compradores pra combinar a
                retira do óleo. Dúvidas ?{" "}
                <Link color="primary.main">Clique aqui</Link> e veja nosso
                tutorial.
              </Text>
            ) : (
              <Text>
                Disponibilize seu óleo reclicável para o compradores, é muito
                fácil e simples.
              </Text>
            )}
          </HStack>
          <Box width={["100%", "100%", "30%", "30%"]} padding={6}>
            <HStack
              spacing={4}
              display={["none", "none", "flex", "flex"]}
              flexDirection={["column", "column", "column", "row"]}
            >
              <Image
                src={gotaImg}
                maxWidth="120px"
                width={["60px", "80px", "90px", "120px"]}
              />
              <Text>
                Recicle seu óleo e acumule Oil Points e troque por produtos e
                tenha vários beneficios.{" "}
                <Link color="primary.main" fontWeight="700">
                  Clique Aqui para saber mais
                </Link>
              </Text>
            </HStack>
            <VStack spacing={4} mt={5}>
              <Heading as="h3" fontSize="30px">
                informe a quantidade:
              </Heading>

              <form onSubmit={handleSubmit(Submit)}>
                <Input
                  {...register("amountOfOil")}
                  height="40px"
                  type="number"
                  error={errors.amountOfOil}
                />
                <Button type="submit" width="100%" size="md">
                  RECICLAR ÓLEO
                </Button>
              </form>
            </VStack>
          </Box>
        </Flex>
        {isLargerThan769 ? (
          <>
            <Heading
              fontFamily="Fauna One"
              fontSize="30px"
              textAlign="center"
              bgColor="#F2ECEC"
              padding={4}
              mt="30px"
              width="100%"
            >
              Veja o que você pode fazer com seus pontos!
            </Heading>
            <Flex
              width="100%"
              justifyContent="space-between"
              flexDirection={["column", "column", "row", "row"]}
              bgColor="#19F59A"
            >
              <SlideFade offsetX="-20px" in={inView}>
                <Box className="reveal" paddingTop={8} paddingX={8}>
                  <Text
                    bgColor="#F2ECEC"
                    fontFamily="Fauna One"
                    padding={4}
                    textAlign="center"
                    textStyle="body"
                  >
                    Troque aqui seus Oil Points por produtos da sua escolha !
                  </Text>
                  <Center padding={8}>
                    <Image
                      src={Online_shopping}
                      maxWidth="300px"
                      _hover={{ transform: "translateY(-10px)" }}
                      cursor="pointer"
                    />
                  </Center>
                </Box>
              </SlideFade>

              <Box
                position="absolute"
                transform="translateX(60%)"
                right="50%"
                bottom="0"
              >
                <SlideFade offsetY="20px" in={inView}>
                  <Image src={dashboard02} />
                </SlideFade>
              </Box>

              <SlideFade offsetX="20px" in={inView}>
                <Box className="reveal" paddingTop={8} paddingX={8}>
                  <Text
                    bgColor="#F2ECEC"
                    fontFamily="Fauna One"
                    padding={4}
                    textAlign="center"
                    textStyle="body"
                  >
                    Quanto mais Oil Points, mais você pode!
                  </Text>

                  <Center padding={8}>
                    <Image
                      src={Investment}
                      maxWidth="300px"
                      _hover={{ transform: "translateY(-10px)" }}
                      cursor="pointer"
                    />
                  </Center>
                </Box>
              </SlideFade>
            </Flex>
          </>
        ) : (
          <Flex width="100%" mt="20px" flexDirection="column" gap="60px">
            <Text padding={4} textAlign="center">
              Dúvidas ? <Link color="primary.main">Clique aqui</Link> e veja
              nosso tutorial.
            </Text>
            <Box bgColor="#19F59A">
              <Text
                bgColor="secondary.main"
                fontFamily="Fauna One"
                padding={4}
                textAlign="center"
                textStyle="body"
              >
                Troque aqui seus Oil Points por produtos da sua escolha !
              </Text>
              <Center padding={8}>
                <Image
                  src={Online_shopping}
                  maxWidth="400px"
                  width="-webkit-fill-available"
                />
              </Center>
            </Box>
            <Box bgColor="#19F59A">
              <Text
                bgColor="secondary.main"
                fontFamily="Fauna One"
                padding={4}
                textAlign="center"
                textStyle="body"
              >
                Quanto mais Oil Points, mais você pode!
              </Text>
              <Center padding={8}>
                <Image
                  src={Investment}
                  maxWidth="400px"
                  width="-webkit-fill-available"
                />
              </Center>
            </Box>
          </Flex>
        )}
      </Flex>
    </>
  );
};
