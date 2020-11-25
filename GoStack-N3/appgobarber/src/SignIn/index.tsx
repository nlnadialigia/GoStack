import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';
import logoImg from '../assets/logo.png';
import Input from '../components/Input';
import Button from '../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
      <Input name="email" icon="mail" placeholder="email" />
      <Input name="password" icon="lock" placeholder="senha" />

      <Button
        onPress={() => {
          // eslint-disable-next-line no-console
          console.log('Deu');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
