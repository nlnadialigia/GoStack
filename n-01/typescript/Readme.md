<h1 align="center">Typescript</h1>
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

<br>

### Por que Typescript?

Definição de Typescript, para que serve e os motivos para a utilização do mesmo nos projetos.

- *Typescript* ⇒ linguagem baseada em javascript com adição de tipagens, acesso a features mais recentes do javascript, independente de onde estamos utilizando a aplicação.

- Funciona como o babel do react.

- O typescript não é entendido nem no browser nem no node, portanto, ao final da aplicação será necessário converter o código em javascript.

- Com typescript o editor consegue saber exatamente quais variáveis estão sendo usadas.

- Na utilização do typescript é necessário instalar os **@types ⇒ sempre com dependência de desenvolvimento**

<br>

### Configurando o projetos

- Peculariedades na hora de rodar o código em ambiente de desenvolvimento.
- Transpilação do código para Javascript em tempo de execução.

<br>

### Quando adicionar tipos

- Explanação de quando adicionar ou não tipagem.
- Exemplo prático de casos de uso da tipagem ou não.
  - Quando a importação da dependência estiver no mesmo arquivo da utilização, não é necessário adicionar a tipagem.

<br>

### Tipando objetos e vetores

- Uso de tipagens em constantes criadas.
- Para utilização dos tipos em variáveis é necessária a definição de uma interface, que irá definir qual tipo do parâmetro em uma variável.

<br>

## :rocket: Tecnologias, Frameworks e Dependências 

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)

<br>

# :link: Como baixar o projeto 

<br>

```js
// Clonar repositório
$ git clone https://github.com/nlnadialigia/GoStack-N1.git

// Acessar diretório
$ cd GoStack-N1/typescript

// Instalar dependências
$ yarn

// Transpilar o projeto
$ yarn tsc


// Iniciar projeto
$ yarn dev
```

<br>

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
Instalar projeto