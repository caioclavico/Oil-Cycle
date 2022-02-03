import { createContext, ReactNode, useContext } from "react";
import { api } from "../services";
import { useAuth } from "./AuthContext";

const SellerOilContext = createContext<SellerFuncs>({} as SellerFuncs);
export const useSell = () => useContext(SellerOilContext);
interface Props {
  children: ReactNode;
}
interface SellerFuncs {
  addOilSeller: (data: SaleData) => void;
  getOilSeller: () => void;
}
interface SaleData {
  seller: string;
  amountOfOil: number;
  userId: number;
}

const SellerProvider = ({ children }: Props) => {
  const { id, accessToken } = useAuth();
  const addOilSeller = (data: SaleData) => {
    api
      .post(
        "/oilSale",
        {
          seller: data.seller,
          amountOfOil: data.amountOfOil,
          userId: id,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  const getOilSeller = () => {
    api
      .get("/oilSale", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => response.data);
  };

  return (
    <SellerOilContext.Provider value={{ addOilSeller, getOilSeller }}>
      {children}
    </SellerOilContext.Provider>
  );
};
export default SellerProvider;
