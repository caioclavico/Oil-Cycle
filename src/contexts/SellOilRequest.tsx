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
  getOilSeller: (accessToken: string) => void;
  attOilSeller: (
    data: IAttSaleData,
    id: number,
    quantity: number,
    accessToken: string
  ) => void;
  product: IProduct[];
}
interface SaleData {
  name: string;
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
  id: number;
}
interface IAttSaleData {
  amountOfOil: number;
  userId: number;
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

  const attOilSeller = useCallback(
    async (
      data: IAttSaleData,
      id: number,
      quantity: number,
      accessToken: string
    ) => {
      await api
        .patch(
          `/oilSale/${id}`,
          {
            amountOfOil: data.amountOfOil - quantity,
            userId: id,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));
    },
    []
  );

  const getOilSeller = useCallback(async (accessToken) => {
    await api
      .get("/oilSale", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setProduct(response.data);
      });
  }, []);

  return (
    <SellerOilContext.Provider
      value={{ addOilSeller, getOilSeller, product, attOilSeller }}
    >
      {children}
    </SellerOilContext.Provider>
  );
};
export default SellerProvider;
