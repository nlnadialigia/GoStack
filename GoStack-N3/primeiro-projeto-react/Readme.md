<h1 align="center">Primeiro porjeto com React</h1>
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

Criação do projeto GitHub Explorer em React já utilizando TypeScript.

<br>

# :book: Aulas

## :sparkles:Estruturas e Padrões

Início da aplicação completa utilizando o React.

Aprendizado sobre fundamentos que serão utilizados tanto na web (com o ReactJS) quanto no mobile (utilizando React Native), tais como padronização de projetos React, estrutura de pastas, estilização no ReactJS e React Native, rotas e consumo de API's externas.

Para iniciar um projeto usando a CLI com o template do TypeScript, rode o seguinte comando:

```bash
create-react-app nome-do-projeto --template=typescript
```
<br>

##  :sparkles: Criando a Aplicação

<br>

### :pushpin: Criando Rotas

Configuração da dependência responsável por lidar com as rotas da aplicação, que é o que define qual página será mostrada em tela, qual endereço deve ser exibido na barra do navegador, etc.

Essa dependência é a `react-router-dom`.

Para adicionar ao seu projeto:

```bash
yarn add react-router-dom
```

Para adicionar as tipagens:

```bash
yarn add -D @types/react-router-dom
```
<br>

### :pushpin: Utilizando Styled Components

Styled-components é uma forma de fazer as estilizações como se fossem
componentes customizados

Esse pacote pode ser utilizando tanto em projetos ReactJS quanto em projetos React Native sem mudar praticamente nada, ou seja, com uma mínima curva de aprendizado.

<br>

### :pushpin: Estilizando Dashboard

Desenvolvimento da parte estrutural e visual da primeira tela do GitHub Explorer que é o Dashboard, aplicando mais conceitos do styled-components e entendendo na prática como funcionam as estilizações que se aplicam apenas em um componente.

<br>

### :pushpin: Conectando a API

Consumo da API do GitHub para exibir informações reais na aplicação.

Para isso, será utilizado um API Client (Axios) no nosso front-end, que é o pacote responsável por fazer todas as requisições que a aplicação
precisar.

**Configurando o Axios**

Para adicionar o pacote ao seu projeto:

```bash
yarn add axios
```

Arquivo *api.ts*:

```jsx
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.github.com',
});

export default api;
```

<br>

### :pushpin: Lidando com erros

Configuração da tratativa de erros para o caso de um usuário buscar por um repositório que não existe ou digitar uma entrada inválida no input de texto, exibindo uma mensagem e alterando o estilo do nosso formulário.

<br>

### :pushpin: Salvando no Storage

Utilização do storage do navegador para persistir os dados de repositórios buscados pela nossa aplicação. Dessa forma, mesmo ao recarregar a página, o estado das informações buscadas não será perdido.

<br>

### :pushpin: Navegando entre rotas

Utilização do *react-router-dom* para fazer a navegação entre telas, e, assim que o usuário clicar em um repositório, ele ser redirecionado para uma página de detalhes.

<br>

### :pushpin: Estilizando Detalhe

 Construção da página de detalhes do GitHub Explorer, fazendo a estrutura e a estilização, aplicando os mesmos conceitos aprendidos anteriormente para construir o dashboard.

<br>

### :pushpin: Listando issues da API

 Utilização dos conceitos de conexão de API na página de detalhes do GitHub Explorer, fazendo a estrutura e a estilização, aplicando os mesmos conceitos aprendidos anteriormente para construir o dashboard.

<br>

# :rocket: Tecnologias, Frameworks e Dependências

- [ReactJs](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Styled-components](https://styled-components.com/)
- [React-icons](https://www.npmjs.com/package/react-icons)
- [Polished](https://github.com/styled-components/polished)
- [Axios](https://www.npmjs.com/package/axios)


<br>

# :link: Como baixar o projeto

<br>

```js
// Clonar repositório
$ git clone https://github.com/nlnadialigia/GoStack.git

// Acessar diretório
$ cd GoStack/GoStack-N3/primeiro-projeto-react

// Instalar dependências
$ yarn

// Iniciar projeto
$ yarn start
```

### :pushpin: Considerações Finais

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

