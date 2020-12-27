<h1 align="center">Arquitetura e DDD</h1>
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

Módulo dedicado aos princípios da programação, arquitetura de software dentro do back-end que vai fazer a nossa aplicação ser escalável, assim como testes automatizados e a metodologia TDD (Test-Driven Development).


## :book: Aulas

### :interrobang:Arquitetura de Testes

📌 **Conceitos DDD e TDD**

Recapitulação de tudo que já foi feito até agora no back-end e entendimento de como está organizada a estrutura do projeto para então partir para uma nova estrutura seguindo o **DDD** (Domain Driven Design) que são boas práticas a serem utilizadas ao longo do desenvolvimento, onde cada domínio é responsável por uma parte diferente da aplicação.

Além disso foi visto o conceito de **TDD** (Test-Driven Development) que é quando criamos um teste antes de criar a funcionalidade.

📌 **Separando em módulos**

Maior separação das responsabilidades da nossa aplicação com base no domínio, ou seja, a área de conhecimento que cada arquivo está relacionado.

📌 **Camada Infra**

Continuando a separação de camadas da aplicação, foi aplicada a camada de infra e de domínio para cada arquivo da aplicação que se encaixe na categoria definida.

*Camada de Infra* ⇒ ferramentas escolhidas para se relacionar com a camada de Domínio (regra de negócios).
  - banco de dados
  - express
  - ferramenta utiliada para enviar o email
  - Não interessa as ferramentas desde que a camada de Domínio não tenha conhecimento dessas ferramentas ⇒ responsável somente pelas regras de negócios.

📌 **Configurando Imports**

Configuração dos `imports` para que funcionem como antes, porém, para que os caminhos não fiquem muito longos e muito trabalhosos de digitar aqueles infinitos ../../. foi adicionada configuração no `tsconfig.json`.
```json
"baseUrl": "./src",
"paths": {
  "@modules/*": ["modules/*"],
  "@config/*": ["config/*"],
  "@shared/*": ["shared/*"]
}
```

📌 **Liskov Substitution Principle**

Maior isolamento dos arquivos que ainda dependem de alguma forma da camada de infra, fazendo com que dependam apenas de uma interface. Isso permite fazer uma melhor manutenção do código ou até trocar o ORM utilizado pela aplicação sem que a aplicação seja afetada.

📌 **Reescrevendo Repositórios**

Reescritura dos métodos dos repositórios para que se tenha mais controle sobre eles, como por exemplo, quais parâmetros recebe e qual o tipo de retorno.

Tudo isso foi feito baseado na interface do repositório e não no repositório em si. Isso nos permite ter uma maior flexibilidade com o código.

📌 **Dependency Inversion Principle**

Aplicação de mais um dos conceitos do SOLID que é a *inversão de dependência*.

Ao invés do *service* lidar diretamente com o repositório importado no arquivo do *service*, esse mesmo repositório foi recebido como parâmetro do `constructor` desse *service* passando o tipo dele como sendo a `interface` criada anteriormente para implementar no próprio repositório.

📌 **Refatorando o módulo de usuários**

 Refatoração do módulo de usuários para que ele siga a mesma estratégia de Dependency Inversion Principle feito anteriormente.

 📌 **Injeção de dependências**

 Aplicação no projeto do pacote de injeção de dependências chamado [tsyringe](https://github.com/microsoft/tsyringe). Ele nos permite automatizar a injeção de dependências.

Para instalar:

```bash
yarn add tsyringe
```

ou:

```bash
npm install tsyringe
```

📌 **Usando controllers**

Refatoração da aplicação adicionando os controllers. Eles conterão todo o conteúdo que até então estava dentro das rotas, abstraindo ainda mais a responsabilidade de cada rota que é apenas repassar a requisição para o controller.

# :link: Como baixar o projeto

```js
// Clonar repositório
$ git clone https://github.com/nlnadialigia/GoStack.git

// Acessar diretório
$ cd GoStack/GoStack-N4/gobarber-api-ddd

// Instalar dependências
$ yarn

// Iniciar projeto
$ yarn dev:sever
```

<br>

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.
Instalar projeto
