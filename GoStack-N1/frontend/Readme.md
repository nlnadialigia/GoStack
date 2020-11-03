<h1 align="center">Front-end com ReactJS</h1>
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

## :information_source: Sobre

Desenvolvimento a aplicação web e conexão com o backend.

## :book: Aulas

<br>

### Conceitos ReactJS

Conceituação de React, sobre SPA (Single-page Applications), como funciona um componente e o conceito de componentização, divisão de responsabilidades entre front-end e back-end, programação imperativa vs programação declarativa, Babel, Webpack.

<br>

### Configurando Babel

Criação dos primeiros códigos da aplicação em React do total zero, configurando o Babel para converter o código da nossa aplicação em um código que o Browser vai entender. Vamos entender um pouquinho sobre os loaders do Webpack.

*Dependências*

```bash
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
```

*babel.config.js*

```js
module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react'
	]
} 
```

<br>

### Configurando Webpack

 Implementação no código da aplicação em React a configuração do Webpack para gerar o bundle da aplicação configurando os loaders que são responsáveis por converter diversos tipos de arquivos como JS, CSS, JSON, arquivos de imagem, etc. 
 Habilitação do live reload da aplicação.

 *webpack.config.js*

 ```js
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
};
```

<br>

### Componentização

A componentização é como nós separamos uma parte do nosso código para transformá-la em algo que pode ser reaproveitada quantas vezes a gente quiser em qualquer parte da nossa aplicação.

<br>

### Propriedades

Entendimento de como são passados valores como propriedades entre componentes e a recuperação desses valores no componente que recebeu essas propriedades.

<br>

### Estado e Imutabilidade

Como armazenar e manipular valores dentro do nosso componente do React utilizando os React Hooks, criando uma pequena funcionalidade de listagem de projetos para entender o funcionamento do estado.

<br>

### Importando CSS e imagens

Configuração de alguns loaders do Webpack para aceitar arquivos de CSS e imagens, e estilização da página de listagem de projetos.

<br>

### Listando Projetos da API

Conexão da  aplicação front-end com o back-end, fazendo com que a página de listagem de projetos passe a salvar os dados da nossa API já desenvolvida no estado da aplicação, e exibi-los em tela.

<br>

### Cadastrando Projetos

Cadastro de novos projetos no banco de dados, mantendo-os salvos na nossa aplicação conforme cadastramos.

<br>
<br>

## :rocket: Tecnologias, Frameworks e Dependências 

- [React](https://pt-br.reactjs.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/concepts/)
- [Axios](https://github.com/axios/axios)


<br>

## :link: Como baixar o projeto 
<br>

```js
// Clonar repositório
$ git clone https://github.com/nlnadialigia/GoStack-N1.git
```

**Back-end** 
```JS
// Colocar o servidor para rodar pelo TERMINAL:
$ cd GoStack-N1/backend

$ yarn

$ yarn dev
```

**Front-end**
```js
// Acessar diretório
$ cd GoStack-N1/frontend

// Instalar dependências
$ yarn

// Iniciar projeto
$ yarn dev
```

<br>

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.