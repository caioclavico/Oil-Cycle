import { Box, Button, Center, Image, Text, VStack } from "@chakra-ui/react";

interface ShopCardProps {
  name: string;
  price: number;
  image: string;
}

export const ShopCard = ({ name, image, price }: ShopCardProps) => {
  return (
    <Box
      cursor="pointer"
      _hover={{
        transform: "translateY(-7px)",
        borderColor: "primary.main",
      }}
      transition="border 0.2s, ease 0s, transform 0.2s"
      border="2px solid"
      borderColor="#EAEEEC"
      borderRadius="5px"
      width="300px"
      boxShadow="2px 4px 4px rgba(0, 0, 0, 0.25)"
      paddingY={6}
      paddingX={4}
    >
      <Center bgColor="gray.0" marginBottom={6}>
        <Image src={image} boxSize="200px" objectFit="cover" />
      </Center>
      <Text textAlign="center" fontWeight="700">
        {name}
      </Text>
      <VStack spacing={4} marginTop={6}>
        <Center
          bgColor="rgba(25, 245, 154, 0.9)"
          width="225px"
          height="55px"
          boxShadow="0px 6px 0px rgba(0, 0, 0, 0.25)"
          borderRadius="6px"
        >
          <Text fontWeight="700" color="white">
            Oil points: {price}
          </Text>
        </Center>

        <Button
          bgColor="rgba(237, 194, 1, 0.9)"
          borderColor="rgba(237, 194, 1, 0.9)"
          boxShadow="0px 6px 0px rgba(0, 0, 0, 0.25)"
          borderRadius="6px"
          _hover={{
            filter: "brightness(0.9)",
          }}
        >
          Eu quero!
        </Button>
      </VStack>
    </Box>
  );
};
