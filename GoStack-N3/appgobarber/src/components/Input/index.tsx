// eslint-disable-next-line no-use-before-define
import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name={icon} size={20} color="#66360" />
    <TextInput keyboardAppearance="dark" {...rest} />
  </Container>
);

export default Input;
