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

Criação da versão mobile da aplicação GoBarber.

<br>

# :book: Aulas

## :sparkles: Estrutura e padrões

<br>

### :pushpin: Configurando estrutura

Criação do projeto utiliando o CLI do React Native configuração do Eslint, Prettier e EditorConfig.

```bash
npx react-native init appgobarber --template react-native-template-typescript
```

<br>

### :pushpin: Figma GoBarber Mobile

<br>

<img src="../../assets/figma-mobile.png" width="400">

<br><br>

### :pushpin: Configurando StatusBar

Configuração da statusbar da aplicação de forma bastante simples para que se aplique em todas as telas do GoBarber.

<br>

### :pushpin: Configuração de navegação

Configuração das duas primeiras páginas da aplicação que são as páginas de login e cadastro já com o *styled-components* que também será utilizado no mobile.

Na configuração da navegação na aplicação será utilizado o *[react-navigation](https://reactnavigation.org/docs/getting-started).*

<br>

### :pushpin: Importando fontes externas

Configuração e utilização de fontes externas no aplicativo.

<br>

## :sparkles: Autenticação e cadastro

<br>

### :pushpin:

<br>

### :pushpin:

<br>

# :rocket: Tecnologias, Frameworks e Dependências

- [ReactJs](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)

<br>

# :link: Como baixar o projeto

<br>

```js
// Clonar repositório
$ git clone https://github.com/nlnadialigia/GoStack.git

// Acessar diretório
$ cd GoStack/GoStack-N3/appgbarber

// Instalar dependências
$ yarn

// Iniciar projeto

  //Rodar o emulador

  // Terminal 1
  $ yarn start

  //Terminal 2
  $ yarn android
```

<br>

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

