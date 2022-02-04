import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import oilImg from "../../assets/oleo2.jpg";
import { Flex, VStack, Grid, Heading, Box } from "@chakra-ui/react";
import { useRegister } from "../../contexts/RegisterProvider";
import { Header } from "../../components/Header";

const registerSellerSchema = yup.object().shape({
  name: yup.string().required("campo obrigatório"),
  lastName: yup.string().required("campo obrigatório"),
  CPF: yup.string().required("campo obrigatório"),
  address: yup.string().required("campo obrigatório"),
  city: yup.string().required("campo obrigatório"),
  state: yup.string().required("campo obrigatório"),
  CEP: yup.string().required("campo obrigatório"),

  email: yup
    .string()
    .required("Email obrigatório")
    .email("Digite um email válido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});
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
    resolver: yupResolver(registerSellerSchema),
  });
  const subData = (data: formData) => {
    signUp(data);
  };
  return (
    <>
      <Header />
      <Flex
        height="70em"
        justifyContent="center"
        alignItems={["flex-start", "flex-start", "center"]}
        backgroundImage={oilImg}
        backgroundSize="cover"
      >
        <Grid
          onSubmit={handleSubmit(subData)}
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
            <Input
              placeholder="Nome"
              error={errors.name}
              {...register("name")}
            />
            <Input
              placeholder="Sobrenome"
              error={errors.lastName}
              {...register("lastName")}
            />
            <Input placeholder="CPF" error={errors.CPF} {...register("CPF")} />
            <Input
              placeholder="Endereço"
              error={errors.address}
              {...register("address")}
            />
            <Input
              placeholder="Complemento"
              error={errors.complement}
              {...register("complement")}
            />
            <Input
              placeholder="Cidade"
              error={errors.city}
              {...register("city")}
            />
            <Input
              placeholder="Estado"
              error={errors.state}
              {...register("state")}
            />
            <Input placeholder="CEP" error={errors.CEP} {...register("CEP")} />
            <Input
              placeholder="Contato"
              error={errors.contact}
              {...register("contact")}
            />
            <Input
              type="email"
              placeholder="Email"
              error={errors.email}
              {...register("email")}
            />
            <Input
              type="password"
              placeholder="Senha"
              error={errors.password}
              {...register("password")}
            />
            <Button type="submit" onClick={handleSubmit(subData)}>
              Cadastro
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </>
  );
};
export default Register;
