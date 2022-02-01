import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegisterBuyer } from "../../contexts/RegisterBuyerProvider";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
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
      <form onSubmit={handleSubmit(subData)}>
        <h1>Cadastro do Vendedor</h1>
        <Input placeholder="Nome" {...register("name")} />
        <Input placeholder="Sobrenome" {...register("lastName")} />
        <Input placeholder="CNPJ" {...register("CNPJ")} />
        <Input placeholder="Razão Social" {...register("corporateName")} />
        <Input placeholder="Nome Fantasia" {...register("fantasyName")} />
        <Input placeholder="Endereço" {...register("address")} />
        <Input placeholder="Complemento" {...register("complement")} />
        <Input placeholder="Cidade" {...register("city")} />
        <Input placeholder="Estado" {...register("state")} />
        <Input placeholder="CEP" {...register("CEP")} />
        <Input placeholder="Contato" {...register("contact")} />
        <Input placeholder="Email" {...register("email")} />
        <Input placeholder="Senha" {...register("password")} />
        <Button type="submit">Cadastro</Button>
      </form>
    </div>
  );
};
export default RegisterBuyer;
