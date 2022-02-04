import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import { FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import garrafasOleo from "../../assets/garrafas-oleo.png";

interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalCart = ({ isOpen, onClose }: ModalCartProps) => {
  const { cart, removeProduct, removeAll } = useCart();
  console.log(cart);

  const { accessToken } = useAuth();

  const total = cart.reduce((anterior, atual) => {
    return atual.quantity + anterior;
  }, 0);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="white" color="gray.800" borderRadius="5px">
        <ModalHeader
          display="flex"
          bgColor="primary.main"
          borderTopRadius="5px"
        >
          <Text fontWeight="bold" ml="2" color="white">
            Carrinho de compras
          </Text>
          <Center
            onClick={onClose}
            as="button"
            ml="auto"
            w="32px"
            h="32px"
            bg="transparent"
            fontSize="lg"
            borderRadius="md"
            color="white"
          >
            <FaTimes />
          </Center>
        </ModalHeader>

        <ModalBody textAlign="center" padding="20px 25px">
          {!cart.length ? (
            <>
              <Text textStyle="h3">Sua sacola esta vazia</Text>
              <Text textStyle="caption" align="center" mt="4">
                Adicione itens
              </Text>
            </>
          ) : (
            <>
              {cart.map((product) => (
                <Flex
                  key={product.id}
                  flexDirection="row"
                  mb="10px"
                  justifyContent="space-between"
                >
                  <Flex>
                    <Center
                      bgColor="#E0E0E0"
                      height="80px"
                      width="82px"
                      borderRadius="5px"
                    >
                      <Image src={garrafasOleo} />
                    </Center>
                    <Flex
                      ml="10px"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Text textStyle="h3">Vendedor: {product.name}</Text>
                      <Text>Quantidade: {product.quantity}L</Text>
                    </Flex>
                  </Flex>
                  <Box
                    as="button"
                    onClick={() => removeProduct(product.id, accessToken)}
                  >
                    <Icon as={MdDelete} color="gray.300" boxSize={5} />
                  </Box>
                </Flex>
              ))}
              <hr style={{ border: "1px solid #e0e0e0", width: "100%" }}></hr>
              <Flex justifyContent="space-between" mt="15px" mb="20px">
                <Text textStyle="body" fontWeight="600">
                  Total
                </Text>
                <Text textStyle="body" color="gray.300" fontWeight="600">
                  {total} Litros
                </Text>
              </Flex>
              <Button size="lg" variant="disable" onClick={() => removeAll()}>
                Remover todos
              </Button>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
