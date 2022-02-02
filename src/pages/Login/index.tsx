import {
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import OilImg from "../../assets/oleo2.jpg";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Digite um email válido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});

interface LoginData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();
  const toast = useToast();
  const history = useHistory();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: LoginData) => {
    signIn(data)
      .then((response) => {
        // criar logica para direcionar para dashboard de comprador ou vendedor
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Email ou senha incorretos",
          description: "Por favor, tente  novamente",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };
  return (
    <>
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems={["flex-start", "flex-start", "center"]}
        backgroundImage={OilImg}
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
          <Heading fontFamily="Fauna One">Entrar</Heading>

          <VStack mt="8" spacing="10">
            <Input
              label="Email"
              placeholder="Digite seu email"
              error={errors.email}
              {...register("email")}
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              error={errors.password}
              {...register("password")}
            />
            <Text>
              Novo por aqui? <br />{" "}
              <Link color="primary.main" href="/signup">
                Clique aqui
              </Link>{" "}
              e faça seu cadastro
            </Text>
            <Button
              type="submit"
              onClick={handleSubmit(handleLogin as any)}
              width="225px"
            >
              Entrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </>
  );
};
