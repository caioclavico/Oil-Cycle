import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegister } from "../../contexts/RegisterProvider";
import { Input } from "../../components/Input";
import { Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import OilImg from "../../assets/oleo2.jpg";
import { Button } from "../../components/Button";

interface formData {
  name: string;
  lastName: string;
  CPF: number;
  address: string;
  complement: string;
  city: string;
  state: string;
  CEP: number;
  contact: number;
  email: string;
  password: string;
  points: number;
}

const Register = () => {
  const { signUp } = useRegister();
  const schema = yup.object().shape({});
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });
  const subData = (data: formData) => {
    signUp(data);
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
          <Heading fontFamily="Fauna One">Cadastro de Vendedores</Heading>
          <VStack mt="8" spacing="10">
            <Input placeholder="Nome" {...register("name")} />
            <Input placeholder="Sobrenome" {...register("lastName")} />
            <Input placeholder="CPF" {...register("CPF")} />
            <Input placeholder="Endereço" {...register("address")} />
            <Input placeholder="Complemento" {...register("complement")} />
            <Input placeholder="Cidade" {...register("city")} />
            <Input placeholder="Estado" {...register("state")} />
            <Input placeholder="CEP" {...register("CEP")} />
            <Input placeholder="Contato" {...register("contact")} />
            <Input placeholder="Email" {...register("email")} />
            <Input placeholder="Senha" {...register("password")} />
            <Button type="submit" onClick={handleSubmit(subData)}>
              Cadastro
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </div>
  );
};
export default Register;
