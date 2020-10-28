<h1 align="center">Front-end com ReactJS</h1>
<p align="center">
  <img src="assets/logo.jpg" width="300" heigth="300">
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
  <a href="#licença">Licença</a>
</h3>

___

<br>
<br>

## :information_source: Sobre

Módulo com os primeiros conceitos do Node.js e aplicação na construção da primeira aplicação backend.

## :book: Aulas

<br>

### Conceitos ReactJS

Nessa aula foram abordados conceitos de React, sobre SPA (Single-page Applications), como funciona um componente e o conceito de componentização, divisão de responsabilidades entre front-end e back-end, programação imperativa vs programação declarativa, Babel, Webpack.

<br>

### Conceitos API rest

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
<br>

## :link: Como contribuir 

- Faça um Fork do repositório
- Clone o seu repositório
- Crie uma branch com a sua feature
- Faça um commit com suas mudanças
- 'Push' a sua branch
- Ir em Pull Requests do projeto original e criar uma pull request com o seu commit
<br>
<br>

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.