import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="Forgot">Esqueci a senha</a>
        </form>
        <a href="criar conta">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SignIn;
