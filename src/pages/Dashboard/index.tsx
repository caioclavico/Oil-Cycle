import { Box } from "@chakra-ui/react";
import { HeaderDashboard } from "./header-dashboard";
import { SellerDashboard } from "./seller-dashboard";
import { BuyerDashboard } from "./buyer-dashboard";
import { useAuth } from "../../contexts/AuthContext";

export const Dashboard = () => {
  const { user } = useAuth();
  let isBuyer = false;

  if ("CNPJ" in user) {
    isBuyer = true;
  }

  return (
    <Box width="100vw">
      <HeaderDashboard />
      {isBuyer ? <BuyerDashboard /> : <SellerDashboard />}
    </Box>
  );
};
