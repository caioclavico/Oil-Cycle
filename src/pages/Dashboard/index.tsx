import { Box } from "@chakra-ui/react";
import { HeaderDashboard } from "./header-dashboard";
import { SellerDashboard } from "./seller-dashboard";
import { BuyerDashboard } from "./buyer-dashboard";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useEffect } from "react";

export const Dashboard = () => {
  const { user, accessToken } = useAuth();
  const { cart, loadCart } = useCart();
  let isBuyer = false;

  if ("CNPJ" in user) {
    isBuyer = true;
  }

  useEffect(() => {
    loadCart(user.id, accessToken);
  }, []);

  return (
    <Box width="100vw">
      <HeaderDashboard />
      {isBuyer ? <BuyerDashboard /> : <SellerDashboard />}
    </Box>
  );
};
