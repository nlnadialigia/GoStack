<h1 align="center">Back-end com Node.js</h1>
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

Módulo com os primeiros conceitos do Node.js e aplicação na construção da primeira aplicação backend.

## :book: Aulas

<br>

### Conceitos Nodejs

- Entendimento sobre os conceitos de Node.js, npm e Yarn, para que eles servem, porque os utilizamos, suas vantagens e diversos conceitos por trás deles. 
- Explanação sobre arquitetura Event-loop, single-thread, non-blocking I/O, Call Stack, ExpressJS entre diversos outros conceitos.

<br>

### Conceitos API rest

- Teoria sobre o funcionamento de uma API REST => uma das formas de lidar com o fluxo de requisição e resposta no seu backend. 
- Explanação sobre métodos HTTP, recursos e rotas, tipos de parâmetros, benefícios da API em relação à clássica MVC, estrutura de dados JSON e HTTP Codes.

<br>

### Criando Projeto com Node

- Criação do projeto node
- Definição da porta do servidor
- Requisição GET com resposta JSON

<br>

### Configurando Nodemon

- Instalação e configuração do Nodemon para que ele aplique essas alterações automaticamente e assim ajude na nossa produtividade no ambiente de desenvolvimento.

- A execução do Nodemon pode ser realizada de várias formas:

  **Direto**

  ```bash
  yarn nodemon src/index.js
  ```

  **Com alteração do package.json**

  ```json
  "scripts": {
    "dev": "nodemon src/index.js"
  }
  ```

  ou

  ```json
  "main": "src/index.js",
  "scripts": {
    "dev": "nodemon"
  }
  ```

  ```bash
  yarn dev
  ```

<br>

### Métodos HTTP

- Peculiaridades de cada método
- Criação das rotas com os 4 principais métodos: GET, POST, PUT, DELETE
- Considerações sobre os métodos:
  
  - **GET** ⇒ buscar informações
  
  - **POST** ⇒ criar informação
  
  - **PUT/PATCH** ⇒ alterar informação, no primeiro caso completo e no segundo alguma informação específica
  
  - **DELETE** ⇒ deletar informação
  
  - Rotas de métodos diferentes podem ter o mesmo nome
  
  - Rotas dos métodos **PUT** e **DELETE** devem informar o parâmetro a qual se referem

<br>

### Utilizando Insomnia

- Instalação do [Insomnia](https://insomnia.rest/) => ferramenta para nos auxiliar a debugar APIs. 
- Criação de *sub environments*
- Montagem das requisições para testar as rotas com os 4 métodos HTTP e executá-las para visualizar o retorno em JSON de cada uma delas.

- Alternativas para sistemas 32bits:
  
  - [Postman](https://www.postman.com/)
  
  - [Hoppscotch](https://hoppscotch.io/pt-br)

<br>

### Tipos de parâmetros

**Query Params**
- Filtros e paginação
- Utilizado no método GET

**Route Params**
- Identificar recursos na hora de atualizar ou deletar
- Rotas do tipo PUT e DELETE

**Request Body**
- Conteúdo na hora de criar ou editar um recurso (JSON)
- Rotas do tipo POST e PUT

**Exemplo realizado**
- Envio dos parâmetros pelo Insomnia
- Configuração do servidor para receber os dados

<br>

### Aplicação Funcional

- Montagem de uma aplicação funcional onde serão listados, cadastrados, atualizados e deletados projetos.
- Aplicação dos 4 métodos HTTP e os 3 tipos de parâmetros.
- Gerenciamento dos projetos diretamente na memória do servidor, utilizando arrays.

<br>

### Middlewares

- Definição do que são middlewares e sua importância nas aplicações. - - Apresentação do formato do middleware, os seus parâmetros, formas de aplicá-los no código e como utilizá-lo para alterar o fluxo das requisições. 

<br>
<br>

## :rocket: Tecnologias, Frameworks e Dependências 

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [uuidv4](https://www.npmjs.com/package/uuidv4)
- [Cors](https://www.npmjs.com/package/cors)

<br>

## :link: Como baixar o projeto 
<br>

```js
// Clonar repositório
$ git clone https://github.com/nlnadialigia/GoStack-N1.git

// Acessar diretório
$ cd GoStack-N1/backend

// Instalar dependências
$ yarn

// Iniciar projeto
$ yarn dev
```

<br>

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.