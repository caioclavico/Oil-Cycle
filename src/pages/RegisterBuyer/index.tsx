import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegisterBuyer } from "../../contexts/RegisterBuyerProvider";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import OilImg from "../../assets/oleo2.jpg";
import { Grid } from "@chakra-ui/react";
import { Flex, Heading, Link, Text, useToast, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
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
    <div>
      <Header />
      <Flex
        height="250vh"
        justifyContent="center"
        alignItems={["flex-start", "flex-start", "center"]}
        backgroundImage={OilImg}
        backgroundSize="cover"
      >
        <Grid
          as="form"
          width="500px"
          position="relative"
          alignItems="center"
          paddingX={[4, 4, 10, 10]}
          paddingY={8}
          marginX={[2, 2, 8, 8]}
          marginTop={[10, 10, 0, 0]}
          bgColor="rgba(254, 251, 251, 0.85)"
          textAlign="center"
        >
          <Heading fontFamily="Fauna One">Cadastro de Compradores</Heading>
          <VStack mt="8" spacing="10">
            <Input height={10} placeholder="Nome" {...register("name")} />
            <Input
              height={10}
              placeholder="Sobrenome"
              {...register("lastName")}
            />
            <Input height={10} placeholder="CNPJ" {...register("CNPJ")} />
            <Input
              height={10}
              placeholder="Razão Social"
              {...register("corporateName")}
            />
            <Input
              height={10}
              placeholder="Nome Fantasia"
              {...register("fantasyName")}
            />
            <Input
              height={10}
              placeholder="Endereço"
              {...register("address")}
            />
            <Input
              height={10}
              placeholder="Complemento"
              {...register("complement")}
            />
            <Input height={10} placeholder="Cidade" {...register("city")} />
            <Input height={10} placeholder="Estado" {...register("state")} />
            <Input height={10} placeholder="CEP" {...register("CEP")} />
            <Input height={10} placeholder="Contato" {...register("contact")} />
            <Input height={10} placeholder="Email" {...register("email")} />
            <Input height={10} placeholder="Senha" {...register("password")} />
            <Button type="submit" onClick={handleSubmit(subData)}>
              Cadastro
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </div>
  );
};
export default RegisterBuyer;
