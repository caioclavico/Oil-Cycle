import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services";

interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  name: string;
  quantity: number;
  userId: number;
  id?: number;
}

interface CartProviderData {
  cart: Product[];
  loadCart: (userId: number, accessToken: string) => Promise<void>;
  addProduct: (data: Product, accessToken: string) => Promise<void>;
  removeProduct: (
    productId: number | undefined,
    accessToken: string
  ) => Promise<void>;
  removeAll: () => Promise<void>;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an ProductProvider");
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const loadCart = useCallback(async (userId: number, accessToken: string) => {
    try {
      const response = await api.get(`/cart?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setCart(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const addProduct = useCallback(async (data: Product, accessToken: string) => {
    api
      .post("/cart", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: AxiosResponse<Product>) => {
        setCart((oldCart) => [...oldCart, response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeProduct = useCallback(
    async (productId, accessToken: string) => {
      await api
        .delete(`/cart/${productId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          const filteredCart = cart.filter(
            (product) => product.id !== productId
          );
          setCart(filteredCart);
        })
        .catch((err) => console.log(err));
    },
    [cart]
  );

  const removeAll = useCallback(async () => {
    cart.forEach((product) => {
      api
        .delete(`/cart/${product.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "@OilCycle:accessToken"
            )}`,
          },
        })
        .then((_) => {
          setCart([]);
        })
        .catch((err) => console.log(err));
    });
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        addProduct,
        cart,
        loadCart,
        removeProduct,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
