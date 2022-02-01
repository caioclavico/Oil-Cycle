export const Button = {
  baseStyle: {
    fontFamily: "Roboto",
    fontWeight: "normal",
    padding: "0px 40px",
    fontSize: "24px",
    borderRadius: "0px",
  },
  sizes: {
    md: {
      height: "40px",
      width: "195px",
      fontSize: "18px",
    },
    lg: {
      height: "55px",
      width: "225px",
    },
  },
  variants: {
    default: {
      border: "2px solid",
      borderColor: "primary.main",
      bg: "primary.main",
      color: "white",
      _hover: {
        bg: "#93D7AF",
        color: "#FFFFFF",
        borderColor: "#93D7AF",
      },
    },
    disable: {
      border: "2px solid",
      borderColor: "gray.100",
      bg: "gray.100",
      color: "gray.300",
      _hover: {
        bg: "gray.300",
        color: "gray.100",
        borderColor: "gray.300",
      },
    },
  },
  defaultProps: {
    size: "lg",
    variant: "default",
  },
};
