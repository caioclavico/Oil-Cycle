import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface ButtonProps extends ChakraButtonProps {
  children: string;
  highlight?: boolean;
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, highlight, ...rest },
  ref
) => (
  <>
    {highlight ? (
      <ChakraButton
        bg="rgba(25, 245, 154, 0.8)"
        color="#0C0D0C"
        borderStyle="none"
        borderRadius="35px"
        fontSize="18px"
        fontWeight="600"
        textShadow="1px 1px #039F61"
        textTransform="uppercase"
        w="300px"
        h="50px"
        _hover={{
          cursor: "pointer",
          filter: "brightness(120%)",
        }}
        _active={{
          border: "1px solid #039F61",
        }}
        {...rest}
      >
        {children}
      </ChakraButton>
    ) : (
      <ChakraButton
        bg="#039F61"
        color="#FAF4F4"
        borderStyle="none"
        fontSize="20px"
        fontWeight="600"
        textShadow="1px 1px #3D3D3D"
        textTransform="uppercase"
        w="200px"
        h="50px"
        _hover={{
          cursor: "pointer",
          filter: "brightness(120%)",
        }}
        _active={{
          border: "1px solid rgba(25, 245, 154, 0.8)",
        }}
        {...rest}
      >
        {children}
      </ChakraButton>
    )}
  </>
);

export const Button = forwardRef(ButtonBase);
