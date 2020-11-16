<h1 align="center">Primeiro porjeto com Node.JS</h1>
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

Criação de projeto node com typescript para ensinamento dos principais conceitos.

## :book: Aulas

### Configurando estrutura

Configuração do primeiro projeto Node + TypeScript do zero e aprendizado sobre as ferramentas utilizadas no projeto.
<br>

### Debugando NodeJS

Configuração e uso do debugger do VSCode, que perminite o monitoramento das variáveis que estão entrando e saindo e quais valores armazenam.

*Gerando o arquivo launch.json*
Ao clicar em create a launch.json file, você será direcionado a escolher uma opção entre:

Chrome (preview); Edge: Launch; Node.js; Node.js (preview); More...

Escolha a opção Node.js.

*Arquivo package.json*
Para que o debugger possa se conectar à nossa aplicação, é necessário que o comando dev:server esteja da seguinte maneira:

```json
"dev:server": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
```
<br>

### Layout da Aplicação

Preview de como ficará a aplicação GoBarber Web e Mobile ao final do bootcamp.

Apresentação boa parte dos conceitos necessários para desenvolvermos qualquer projeto.

<br>

### Cadastro de Agendamento

 Estruturação do nosso projeto, separação das pastas em suas responsabilidades, divisão do código com o intuito de separar as responsabilidades para que possamos organizar melhor a nossa aplicação.

 <br>

 ### Validando a data

Aprendizado de como trabalhar com datas, validar os agendamentos, para não permitir que sejam cadastrados com horas quebradas e também não permitir que dois agendamentos sejam feitos na mesma data e horário.

Tudo isso será feito utilizando a **date-fns**, que é uma biblioteca para lidar com datas dentro do JavaScript.

<br>

### Model de Agendamento

Aplicação do conceito de model (ou entidade), com o intuito de isolar mais ainda as responsabilidades de cada parte do nosso código.

**Model** é o formato de um dado que é armazenado em algum lugar da nossa aplicação, seja um banco de dados ou até mesmo a própria memória.

<br>

### Criando repositórios

Aplicação do conceito de repositórios, visando ainda mais a organização e a estrutura dos nossos arquivos.

Um repositório é a conexão entre a persistência (um banco de dados por exemplo) e a nossa aplicação. É pelo repositório onde iremos buscar as informações no banco (ou onde estiver salva) e devolver para a aplicação.

<br>

### Listando agendamentos

 Implementação da rota de listagem de agendamentos e apesar de não utilizarmos muita regra de negócio, você verá um pouco mais da utilidade do porquê usarmos os repositórios.

 <br>

 ### Trabalhando com dados

Aplicação do conceito que será utilizado ao longo de todo o bootcamp que é o DTO (Data Transfer Object).

Uma das melhores formas para transferir dados de um arquivo para outro no JavaScript/TypeScript é utilizando objetos, ainda mais se for um conjunto de informações como por exemplo o nome e e-mail de um usuário, pois assim é possível tipar e usar da desestruturação de objetos para nomear os parâmetros de uma função.

<br>

### Services & SOLID

Aplicação de um dos conceitos mais importantes da arquitetura de software que é o service.

Um service é a parte do código que possui toda a regra de negócio necessária para executar uma funcionalidade da aplicação como, por exemplo, criar um usuário, editar um dado, buscar informações no banco, etc. Você entenderá como esse padrão de arquitetura nos ajuda a organizar ainda mais a nossa aplicação e o porque de utilizar.

<br>

## :rocket: Tecnologias, Frameworks e Dependências

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [date-fns](https://date-fns.org/)
- [uuid](https://www.npmjs.com/package/uuid)

<br>

# :link: Como baixar o projeto

<br>

```js
// Clonar repositório
$ git clone https://github.com/nlnadialigia/GoStack.git

// Acessar diretório
$ cd GoStack/GoStack-N2/meu-primeiro-projeto

// Instalar dependências
$ yarn

// Transpilar o projeto
$ yarn tsc


// Iniciar projeto
$ yarn dev:sever
```

<br>

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
Instalar projeto
