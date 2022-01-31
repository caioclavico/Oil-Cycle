import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegister } from "../../contexts/RegisterProvider";
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
      <form onSubmit={handleSubmit(subData)}>
        <h1>Cadastro do Vendedor</h1>
        <input placeholder="Nome" {...register("name")} />
        <input placeholder="Sobrenome" {...register("lastName")} />
        <input placeholder="CPF" {...register("CPF")} />
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
export default Register;
