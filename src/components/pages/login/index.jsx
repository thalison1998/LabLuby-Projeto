import React from "react";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";
import { getUserStorage } from "../../../context/AuthProvider/helper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../input";
import logoMobile from "../../../assets/logo-mobile.svg";
import {
  Background,
  Container,
  CreateAnAccount,
  InputContainer,
  Logo,
  RememberPassword,
  SectionForm,
  SectionText,
  Wrapper,
} from "./styles";

import { CheckBox } from "../../checkbox";
import { useLoginSave } from "../../../context/loginSave/useLoginSave";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { Button } from "../../button/styles";
import { Error } from "../../helper/error";
import useMediaResize from "../../../hooks/useMediaResize";


const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("O campo é obrigatório.")
      .email("E-mail inválido, verifique novamente."),
    password: yup.string().required("O campo é obrigatório.").max(5),
  })
  .required();

const Login = () => {
  const { autheticate, loading, error } = useAuth();
  const { checked } = useLoginSave();
  const mobile = useMediaResize('(max-width: 760px)');

 
  const [password, setPassword] = useLocalStorage("password", "");
/*   const [passwordSave, setPasswordSave] = React.useState("");
 */

  const navigation = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    const user = getUserStorage();
    if (user) {
      navigation("Home");
    }
  }, [navigation]);

  const loginStart = (value) => {
    autheticate(value.email, value.password);

    if (checked) {
      setPassword(value.password);
    }
  };

  React.useEffect(() => {
    if (checked && password !== "") {
     /*  setPasswordSave(password); */
    }
    if (checked === false) {
      localStorage.removeItem("password");
    }
  }, [checked, password]);

  return (
    <Container>
      <SectionForm>
       { mobile?<img src={logoMobile} alt={'logo mobile'} />:<Logo />}
        <Wrapper>
          <SectionText>
           { mobile?<h1>Você está na AutoLuby</h1>:<h1>Bem-vindo à AutoLuby</h1>}
            <p>Faça o login para acessar sua conta.</p>
          </SectionText>

          <form onSubmit={handleSubmit(loginStart)}>
            <InputContainer>
              <Controller
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <Input
                    type="text"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="@mail.com"
                    label="Endereço de email"
                    errors={errors}
                  />
                )}
                name="email"
                defaultValue=""
              />
              <Error>{errors.email?.message}</Error>
            </InputContainer>

            <InputContainer>
              <Controller
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <Input
                    type="password"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="senha"
                    label="Senha"
                    errors={errors}
                  />
                )}
                name="password"
                defaultValue=""
              />
              <Error>{errors.password?.message}</Error>
              {error && <Error>Dados incorretos</Error>}
            </InputContainer>

            <RememberPassword>
              <CheckBox valueLabel={"Lembrar minha senha"} />
              <a href="*">Esqueceu a senha?</a>
            </RememberPassword>

            

            {loading ? (
              <Button type="submit" disabled>
                Carregando...
              </Button>
            ) : (
              <Button type="submit">Entrar</Button>
            )}

            <CreateAnAccount>
              <p>
                Ainda não tem uma conta? <a href="*">Criar Conta</a>
              </p>
            </CreateAnAccount>
          </form>
        </Wrapper>
      </SectionForm>
      {!mobile && <Background />}
    </Container>
  );
};
export default Login;
