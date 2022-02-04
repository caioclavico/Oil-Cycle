import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  Avatar,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import gotaDeOleo from "../../assets/gota-de-oleo.png";
import heroi from "../../assets/heroi_boneco.png";
import modalSellerImg from "../../assets/modal-seller-img.png";
import gotaPoints from "../../assets/gota.png";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

interface ModalSellerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalSeller = ({ isOpen, onClose }: ModalSellerProps) => {
  const { user } = useAuth();
  const [isLargerThan769] = useMediaQuery("(min-width: 768px)");
  const history = useHistory();

  let responsive = {
    backgroundColor: "",
    avatarSize: "",
  };

  if (isLargerThan769) {
    responsive.backgroundColor = "#FEFBFB";
    responsive.avatarSize = "xl";
  } else {
    responsive.backgroundColor = "";
    responsive.avatarSize = "lg";
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="white" borderRadius="5px" maxWidth={["720px"]}>
        <Flex flexDirection={["column", "column", "row"]} width="100%">
          <Box bgColor="#19F59A" borderLeftRadius="5px">
            <Center
              onClick={onClose}
              as="button"
              w="32px"
              h="32px"
              bg="white"
              fontSize="lg"
              borderRadius="md"
              color="primary.main"
              position="relative"
              top="10px"
              left="10px"
            >
              <FaTimes />
            </Center>

            <Flex
              flexDirection={["row", "row", "column"]}
              paddingX={[0, 0, 6]}
              paddingY={[0, 0, 8]}
              bgColor={responsive.backgroundColor}
              margin={["0px", "0px", "30px"]}
              marginTop={["0px", "0px", "30px"]}
              marginBottom={["10px", "10px"]}
              borderRadius="30px"
              alignItems="center"
              justifyContent="center"
              gap="15px"
            >
              <Flex flexDirection="column" alignItems={"center"}>
                <Avatar name={user.name} size={responsive.avatarSize} />
                <Text fontWeight="700" color="primary.main">
                  {user.name}
                </Text>
              </Flex>
              <VStack
                spacing={[0, 0, 4]}
                border="1px solid #19F59A"
                borderRadius="30px"
                width={["", "", "100%"]}
                paddingY={[0, 0, 4]}
                fontWeight="700"
              >
                <Text mb="10px">Meus dados:</Text>
                <Text>
                  cidade: {user.city} - {user.state}
                </Text>
                <Text>Bairro: {user.address}</Text>
                <Text>CEP: {user.CEP}</Text>
                <Text>CPF: 000.000.000-00</Text>
              </VStack>
              {isLargerThan769 && (
                <>
                  <Button
                    onClick={() => {
                      onClose();
                      history.push("/shop");
                    }}
                  >
                    Trocar meus pontos
                  </Button>
                  <Button
                    onClick={() => {
                      history.push("/dashboard");
                      onClose();
                    }}
                  >
                    Reciclar óleo
                  </Button>
                </>
              )}
            </Flex>
          </Box>
          <Box>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              paddingX={4}
              paddingY={6}
              height="100%"
            >
              <Text
                fontFamily="Fauna One"
                fontSize="xl"
                textAlign="center"
                marginBottom={4}
              >
                Acompanhe aqui as infromações do seu perfil
              </Text>

              <VStack alignItems="flex-start" color="primary.main" spacing={4}>
                <Flex
                  gap="30px"
                  alignItems="center"
                  border="1px solid #19F59A"
                  borderRadius="30px"
                  width="100%"
                  paddingY={4}
                  paddingX={2}
                >
                  <Image
                    src={gotaPoints}
                    w="50px"
                    h="50px"
                    objectFit="contain"
                  />
                  <Flex flexDirection="column">
                    <Text fontWeight="700">MEUS OILS POINTS:</Text>
                    <Text>25850</Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="30px"
                  alignItems="center"
                  border="1px solid #19F59A"
                  borderRadius="30px"
                  width="100%"
                  paddingY={4}
                  paddingX={2}
                >
                  <Image
                    src={gotaDeOleo}
                    w="50px"
                    h="50px"
                    objectFit="contain"
                  />
                  <Flex flexDirection="column">
                    <Text fontWeight="700">LITROS DE ÓLEO QUE RECICLEI:</Text>
                    <Text>300/L</Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="30px"
                  alignItems="center"
                  border="1px solid #19F59A"
                  borderRadius="30px"
                  width="100%"
                  paddingY={4}
                  paddingX={2}
                >
                  <Image src={heroi} w="50px" h="50px" objectFit="contain" />
                  <Flex flexDirection="column">
                    <Text fontWeight="700">LITROS D`ÁGUA QUE SALVEI:</Text>
                    <Text>7500000/L</Text>
                  </Flex>
                </Flex>
                {isLargerThan769 ? (
                  <Center width="100%">
                    <Image src={modalSellerImg} width="250px" />
                  </Center>
                ) : (
                  <Center flexDirection="column" width="100%" gap="15px">
                    <Button
                      onClick={() => {
                        onClose();
                        history.push("/shop");
                      }}
                    >
                      Trocar meus pontos
                    </Button>
                    <Button
                      onClick={() => {
                        history.push("/dashboard");
                        onClose();
                      }}
                    >
                      Reciclar óleo
                    </Button>
                  </Center>
                )}
              </VStack>
            </Flex>
          </Box>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
