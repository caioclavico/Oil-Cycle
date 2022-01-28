import {
  FormControl,
  InputGroup,
  Input as ChakraInput,
  FormLabel,
  FormErrorMessage,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";
import {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "negative.main",
  default: "rgba(25, 245, 154, 0.17)",
  focus: "primary.main",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, icon: Icon, error = null, ...rest },
  ref
) => {
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  return (
    <FormControl>
      {!!label && (
        <FormLabel textTransform="uppercase" mb={0}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        <ChakraInput
          id={name}
          name={name}
          bgColor="rgba(25, 245, 154, 0.17)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderColor={inputVariation[variation]}
          border="2px solid"
          _placeholder={{ color: "gray.300" }}
          _focus={
            variation === "default"
              ? {
                  borderColor: "#039F61",
                }
              : {
                  borderColor: `${inputVariation[variation]}`,
                }
          }
          _hover={{
            borderColor: "#039F61",
          }}
          variant="outline"
          size="lg"
          h="60px"
          ref={ref}
          {...rest}
        />
        {!!error && (
          <FormErrorMessage color="negative.main">
            {error.message}
          </FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
