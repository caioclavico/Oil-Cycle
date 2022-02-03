import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegisterBuyer } from "../../contexts/RegisterBuyerProvider";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import oilImg from "../../assets/oleo2.jpg";
import {
  Center,
  Flex,
  VStack,
  Image,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
  Button,
  Grid,
  Heading,
  Box,
} from "@chakra-ui/react";

interface formData {
  name: string;
  lastName: string;
  CNPJ: number;
  corporateName: string;
  fantasyName: string;
  address: string;
  complement: string;
  city: string;
  state: string;
  CEP: number;
  contact: number;
  email: string;
  password: string;
}

const RegisterBuyer = () => {
  const { signUpBuy } = useRegisterBuyer();
  const schema = yup.object().shape({});
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });
  const subData = (data: formData) => {
    signUpBuy(data);
  };
  return (
    <>
      <Header />

      <Flex
        height="100em"
        justifyContent="center"
        alignItems={["flex-start", "flex-start", "center"]}
        backgroundImage={oilImg}
        backgroundSize="cover"
      >
        <Grid
          as="form"
          width="600px"
          alignItems="center"
          paddingX={[4, 4, 10, 10]}
          paddingY={8}
          marginX={[2, 2, 8, 8]}
          marginTop={[10, 10, 0, 0]}
          bgColor="rgba(254, 251, 251, 0.85)"
          textAlign="center"
        >
          <VStack spacing="2">
            <Heading as="h1">Cadastro do Vendedor</Heading>

            <Input placeholder="João" label="Nome" {...register("name")} />

            <Input
              placeholder="Americo da Silva Mello"
              label="sobrenome"
              {...register("lastName")}
            />
            <Input
              placeholder="00.000.000/000-00"
              label="CNPJ"
              {...register("CNPJ")}
            />
            <Input
              placeholder="João Americo da Silva Melo  - ME"
              label="Razão Social"
              {...register("corporateName")}
            />
            <Input
              placeholder="Big Tree Coleta"
              label="Nome Fantasia"
              {...register("fantasyName")}
            />
            <Input
              placeholder="Av Brasil, 565"
              label="Endereço"
              {...register("address")}
            />
            <Input
              placeholder="casa frente"
              label="Complemento"
              {...register("complement")}
            />
            <Input
              placeholder="Campinas"
              label="Cidade"
              {...register("city")}
            />
            <Input
              placeholder="São Paulo"
              label="Estado"
              {...register("state")}
            />
            <Input placeholder="90070-220" label="CEP" {...register("CEP")} />
            <Input
              placeholder="(21) 98878-4006"
              label="Contato"
              {...register("contact")}
            />
            <Input
              placeholder="joh_melo@gmail.com"
              label="Email"
              {...register("email")}
            />
            <Input
              placeholder="Senha"
              label="Senha"
              {...register("password")}
            />
            <Button type="submit">Cadastro</Button>
          </VStack>
        </Grid>
      </Flex>
    </>
  );
};
export default RegisterBuyer;
