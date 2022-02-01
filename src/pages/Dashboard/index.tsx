import { Box } from "@chakra-ui/react";
import { HeaderDashboard } from "./header-dashboard";
import { SellerDashboard } from "./seller-dashboard";

export const Dashboard = () => {
  return (
    <Box width="100vw">
      <HeaderDashboard />
      <SellerDashboard />
    </Box>
  );
};
