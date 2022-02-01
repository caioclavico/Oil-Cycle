import { ReactNode, useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface ModalProps {
  title: string;
  show: boolean;
  onClose: Function;
  children: ReactNode;
}

export const ModalCart = ({ title, show, onClose, children }: ModalProps) => {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
    onClose(false);
  };

  useEffect(() => {
    setVisible(show);
  }, [show]);

  return (
    <Box
      visibility={visible ? "visible" : "hidden"}
      opacity={visible ? "1" : "0"}
      transition="opacity 500ms"
      bg="rgba(0, 0, 0, 0.7)"
      position="absolute"
      top="0"
      right="0"
      bottom="0"
      left="0"
    >
      <Box
        m="70px auto"
        bg="#fff"
        borderRadius="5px"
        position="relative"
        transition="all 5s ease-in-out"
        overflow="auto"
        w="50%"
        maxH="50%"
      >
        <Heading
          as="h2"
          mt="0"
          color="#333"
          fontSize="20px"
          ml="30px"
          textAlign="left"
          transform="translateY(21px)"
        >
          {title}
        </Heading>
        <Text
          as="span"
          onClick={handleClose}
          position="absolute"
          top="10px"
          right="30px"
          transition="all 200ms"
          fontSize="32px"
          fontWeight="bold"
          textDecor="none"
          color="#f00"
          _hover={{
            cursor: "pointer",
            filter: "brightness(75%)",
            transition: "0.5s",
          }}
        >
          &times;
        </Text>
        <Box overflow="auto">{children}</Box>
      </Box>
    </Box>
  );
};
