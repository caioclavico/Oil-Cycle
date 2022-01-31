import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegisterBuyer } from "../../contexts/RegisterBuyerProvider";
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
        <input placeholder="Nome" {...register("name")} />
        <input placeholder="Sobrenome" {...register("lastName")} />
        <input placeholder="CNPJ" {...register("CNPJ")} />
        <input placeholder="Razão Social" {...register("corporateName")} />
        <input placeholder="Nome Fantasia" {...register("fantasyName")} />
        <input placeholder="Endereço" {...register("address")} />
        <input placeholder="Complemento" {...register("complement")} />
        <input placeholder="Cidade" {...register("city")} />
        <input placeholder="Estado" {...register("state")} />
        <input placeholder="CEP" {...register("CEP")} />
        <input placeholder="Contato" {...register("contact")} />
        <input placeholder="Email" {...register("email")} />
        <input placeholder="Senha" {...register("password")} />
        <button type="submit">Cadastro</button>
      </form>
    </div>
  );
};
export default RegisterBuyer;
