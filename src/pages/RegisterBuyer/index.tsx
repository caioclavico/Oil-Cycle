import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegisterBuyer } from "../../contexts/RegisterBuyerProvider";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import oilImg from "../../assets/oleo2.jpg";
import { Flex, VStack, Grid, Heading, Box } from "@chakra-ui/react";

const registerBuyerSchema = yup.object().shape({
  name: yup.string().required("campo obrigatório"),
  lastName: yup.string().required("campo obrigatório"),
  CNPJ: yup.string().required("campo obrigatório"),
  corporateName: yup.string().required("campo obrigatório"),
  fantasyName: yup.string().required("campo obrigatório"),
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
    resolver: yupResolver(registerBuyerSchema),
  });
  const subData = (data: formData) => {
    signUpBuy(data);
  };

  return (
    <>
      <Header />

      <Flex
        height="110em"
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

            <Input
              placeholder="João"
              label="Nome"
              error={errors.name}
              {...register("name")}
            />

            <Input
              placeholder="Americo da Silva Mello"
              label="sobrenome"
              error={errors.lastName}
              {...register("lastName")}
            />
            <Input
              placeholder="00.000.000/000-00"
              label="CNPJ"
              error={errors.CNPJ}
              {...register("CNPJ")}
            />
            <Input
              placeholder="João Americo da Silva Melo  - ME"
              label="Razão Social"
              error={errors.corporateName}
              {...register("corporateName")}
            />
            <Input
              placeholder="Big Tree Coleta"
              label="Nome Fantasia"
              error={errors.fantasyName}
              {...register("fantasyName")}
            />
            <Input
              placeholder="Av Brasil, 565"
              label="Endereço"
              error={errors.address}
              {...register("address")}
            />
            <Input
              placeholder="casa frente"
              label="Complemento"
              error={errors.complement}
              {...register("complement")}
            />
            <Input
              placeholder="Campinas"
              label="Cidade"
              error={errors.city}
              {...register("city")}
            />
            <Input
              placeholder="São Paulo"
              label="Estado"
              error={errors.state}
              {...register("state")}
            />
            <Input
              placeholder="90070-220"
              label="CEP"
              error={errors.CEP}
              {...register("CEP")}
            />
            <Input
              placeholder="(21) 98878-4006"
              label="Contato"
              error={errors.contact}
              {...register("contact")}
            />
            <Input
              placeholder="joh_melo@gmail.com"
              label="Email"
              error={errors.email}
              {...register("email")}
            />
            <Input
              placeholder="Senha"
              label="Senha"
              error={errors.password}
              {...register("password")}
            />
            <Button type="submit" onClick={handleSubmit(handleSubmit as any)}>
              Cadastro
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </>
  );
};
export default RegisterBuyer;
