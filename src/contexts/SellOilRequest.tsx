import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
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
  product: IProduct[];
}
interface SaleData {
  seller: string;
  amountOfOil: number;
  userId: number;
}
interface IProduct {
  name: string;
  address: string;
  city: string;
  state: string;
  CEP: number;
  amountOfOil: number;
  userId: string;
}

const SellerProvider = ({ children }: Props) => {
  const { id, accessToken, user } = useAuth();
  const [product, setProduct] = useState<IProduct[]>([]);

  const addOilSeller = (data: SaleData) => {
    api
      .post(
        "/oilSale",
        {
          name: user.name,
          address: user.address,
          city: user.city,
          state: user.state,
          CEP: user.CEP,
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

  const getOilSeller = useCallback(async () => {
    await api
      .get("/oilSale", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      });
  }, []);

  return (
    <SellerOilContext.Provider value={{ addOilSeller, getOilSeller, product }}>
      {children}
    </SellerOilContext.Provider>
  );
};
export default SellerProvider;
