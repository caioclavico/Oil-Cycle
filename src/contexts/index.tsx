import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";
import RegisterBuyerProvider from "./RegisterBuyerProvider";
import RegisterProvider from "./RegisterProvider";
import SellerProvider from "./SellOilRequest";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <AuthProvider>
    <RegisterBuyerProvider>
      <RegisterProvider>
        <SellerProvider>
          <CartProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </CartProvider>
        </SellerProvider>
      </RegisterProvider>
    </RegisterBuyerProvider>
  </AuthProvider>
);
