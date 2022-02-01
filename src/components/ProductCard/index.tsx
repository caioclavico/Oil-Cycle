import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Input } from "../Input";
import Check from "../../assets/check.png";
import Liters from "../../assets/liters.png";
import Local from "../../assets/local.png";
import Plus from "../../assets/plus.png";

export const ProductCard = () => (
  <Flex
    bg="#FEFBFB"
    boxShadow="2px 2px 4px rgba(0, 0, 0, 0.25)"
    flexDir="column"
  >
    <Flex as="figure" alignItems="center">
      <Icon src={Check} size="96" />
      <Text as="figcaption">
        <Heading as="h2" fontSize="36px">
          Disponível
        </Heading>
        <Heading as="h3" fontSize="24px">
          <b>Vendedor:</b>&nbsp;Ricardo
        </Heading>
      </Text>
    </Flex>
    <Flex as="figure" alignItems="center">
      <Icon src={Local} size="96" />
      <Text as="figcaption" fontSize="24px">
        <b>Endereço:</b>&nbsp;Cidade: Guarujá - SP Bairro: Enseada CEP:
        11030-003
      </Text>
    </Flex>
    <Flex as="figure" alignItems="center">
      <Icon src={Liters} size="96" />
      <Box>
        <Input
          bg="#FEFBFB"
          border="2px solid #027847"
          boxSizing="border-box"
          name="quantity"
          type="number"
        />
        <Text as="figcaption">80 litros disponíveis</Text>
      </Box>
    </Flex>
    <Flex as="figure" alignItems="center">
      <Icon src={Plus} size="96" />
      <Button bg="#19F59A" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
        Adicionar
      </Button>
    </Flex>
  </Flex>
);
