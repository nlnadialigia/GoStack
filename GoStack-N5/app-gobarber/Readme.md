<h1 align="center">App GoBarber</h1>
<p align="center">
  <img src="../../assets/logo.jpg" width="300" heigth="300">
</p>


<p align="center">
  <img alt="Made by Nadia Ligia" src="https://img.shields.io/badge/made%20by-Nadia%20Ligia-informational">

  <a href="license.md">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-informational">
  </a>
</p>

___

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#book-aulas">Aulas</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-frameworks-dependencias">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#links">Baixar projeto</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___

<br>
<br>

# :information_source: Sobre

Finalização do aplicativo mobile com React Native do GoBarber que será utilizado pelos clientes para agendar serviços com os prestadores.

<br>

# :book: Aulas

## ✨ Ajustes na API

<br>

### 📌 Introdução ao módulo

Ajustes na API desenvolvida até agora para que o front-end web consiga funcionar da maneira correta de acordo com o layout.

<br>

### 📌 Lista de providers com serialização

Serialização dos dados de prestadores na listagem do dashboard que, até então, estavam vindo com o hash da senha.

<br>

### 📌 Endereço das imagens

Substituição do valor da variável ambiente de URL da API para o IP local da máquina.

Para continuar usando localhost, com o dispositivo físico conectado ou emulador aberto, rode o seguinte comando no terminal:

```bash
adb reverse tcp:3333 tcp:3333
```

<br>

### 📌 Criando páginas e rotas

Desenvolvimento da última parte do App GoBarber, iniciando pela organização das próximas páginas e rotas que serão implementadas.

<br>

## ✨ Dashboard

<br>

### 📌 Header do Dashboard

Desenvolvimento dessa última (e mais longa) parte do App GoBarber, começaremos organizando as próximas páginas e rotas que serão implementadas.

Construção do componente e a estilização do header para exibir o nome e avatar do usuário logado com um botão na imagem que direciona o usuário para a página de perfil.

<br>

### 📌 Buscando providers da API

Incrementação do dashboard fazendo uma flatlist, a listagem de prestadores da API já realizando uma requisição para utilizarmos dados reais para então prosseguirmos com a estilização.

<br>

### 📌 Listagem de prestadores

Estilização e estrutura de cada card de prestador a ser exibido na listagem de cabeleireiros e também criaremos a função para direcionar o usuário à uma nova página quando clicar em algum item da lista.

<br>

## ✨ Agendamento

<br>

### 📌 Estrutura da criação

Desenvolvimento da página de criação de um agendamento, configurando a tipagem do id do prestador enviado pela página de dashboard e criação do header da página.

<br>

### 📌 Alternando entre providers

Criação da listagem de prestadores em uma lista horizontal para que o usuário consiga alternar entre os cabeleireiros sem que precise voltar para o dashboard.

<br>

### 📌 Criando Picker de data

Configuração do `date picker`, um calendário para que o usuário possa selecionar a data de agendamento a ser enviada para a API.

Para isso, será utilizado o pacote chamado `datetimepicker`. Ele irá diferenciar a estilização nativa entre as plataformas e oferecer o suporte necessário.

Caso você enfrente algum erro ao adicionar a propriedade `textColor` no componente do `datetimepicker`, isso acontece pelo motivo de que o `textColor` se aplica apenas ao sistema operacional iOS quando a propriedade display possui o valor "**spinner**". Ou seja, não se pode enviar essa propriedade de nenhuma forma a menos que o valor da `prop` display seja o mencionado.

Como será utilizado o  `display="calendar"` quando o SO for android, utilizar:
```js
<DateTimePicker
    mode="date"
    display={Platform.OS === 'android' ? 'calendar' : 'spinner'}
    value={new Date()}
/>
```

Para usar o `Platform` basta importar de dentro do react-native:

```js
import { Platform } from 'react-native';
```

Para corrigir o problema com a `textColor`, utilizar um "hack" que vai fazer com que a propriedade exista apenas se o SO for iOS:
```js
<DateTimePicker
    {...(Platform.OS === 'ios' && { textColor: '#f4ede8' })} // < nessa linha
    mode="date"
    display={Platform.OS === 'android' ? 'calendar' : 'spinner'}
    value={new Date()}
/>
```

<br>

### 📌 Buscando disponibilidade da API

Desenvolvimento da requisição da disponibilidade de um dia à API para exibição dos dias disponíveis na página de criação de um agendamento.

Serão feitas algumas mudanças como o uso de estado para cada informação que pode mudar durante o uso da aplicação.

<br>

### 📌 Debugando app com Flipper

Utilização do Flipper, uma ferramenta que irá auxiliar no desenvolvimento de aplicações com o React Native. Ela serve para fazer observarmos valores de estados, chamada de funções, etc. Principalmente para requisições feitas à API's.

<br>

### 📌 Disponibilidade por período

Desenvolvimento da listagem de horários disponíveis na manhã e tarde quando o usuário escolher uma data no calendário, de forma semelhante ao realizado na listagem de agendamentos para manhã e tarde no dashboard da web.

<br>

### 📌 Mostrando horários em tela

Estruturação e estilização de acordo com o layout do Figma, fazendo isso de forma que os horários possam ser selecionados para que a criação do agendamento seja feita.

<br>

### 📌 Criação do agendamento

Criação do agendamento usando todas as features que implementamos até agora na página da aplicação, enviando os dados para a API.

<br>

<br>

## ✨ Sucesso

<br>

### 📌 Criando estrutura da tela

Criação da estrutura e estilização da página de sucesso que será exibida logo após o agendamento ter sido criado.

Lógica para resetar as rotas navegadas até então para que o usuário não consiga voltar para a página de agendamento concluído mesmo após clicar no botão.

<br>

### 📌 Formatando a data

Criação da lógica de fazer com que a mensagem com a data do agendamento seja dinâmica. Será utilizada a função format do `date-fns` para isso.

<br>

## ✨ Perfil

<br>

### 📌 Criando tela de perfil

Reaproveitamento de toda a parte de estrutura e validação da página de logon e construção da página de atualização de dados do perfil, colocando os campos que faltam e ajustando algumas mudanças necessárias para que fique de acordo.

<br>

### 📌 Atualização dos dados

Ajuste da validação do Yup (também reaproveitando o que foi feito na web) e realizar o envio das informações para a API.

<br>

### 📌 Atualização do avatar

Configuração do pacote de `picker` para imagens no react native para que seja possível realizar o upload de uma nova imagem.

<br>

# :rocket: Tecnologias, Frameworks e Dependências

- [ReactJs](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [Styled Components](https://styled-components.com)
- [React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons)
- [Unform](https://unform.dev)
- [Yup](https://www.npmjs.com/package/yup)
- [Axios](https://github.com/axios/axios)
- [React Native Async Storage](https://github.com/react-native-async-storage/async-storage)

<br>

# 🔗 Como baixar o projeto

<br>

```bash
Clonar repositório
$ git clone https://github.com/nlnadialigia/GoStack.git

Acessar diretório
$ cd GoStack/GoStack-N5/app-gbarber

Instalar dependências
$ yarn
```

## ℹ️ Rodar o Projeto

- Deixar rodando a [api](../../GoStack-N2/gobarber-api) do projeto.
- Abrir 2 terminais e rodar:
```bash
yarn start

yarn android
```
- É necessário utilizar ou um Emulador ou o celular para que possa visualizar o aplicativo


<br>

### 📌 Considerações Finais

Projeto estrutura com [Eslint](https://eslint.org/) e [Prettier](https://prettier.io/). Para que não haja conflito entre as configurações é necessária a remoção da extensão Prettier do VSCode, caso a mesma esteja instalada.

**Configuração nas Settings(JSON)**
```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
<br>

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.

