<h1 align="center">GoBarber Web</h1>
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

Desenvolvimento final do front-end web da aplicação GoBarber com a criação das telas e funções que os prestadores de serviço utilizarão para consultar a agenda e disponibilidade.

<br>

# :book: Aulas

## :sparkles: Ajustes na API

<br>

### :pushpin: Utilizando Query Params

Realização d os ajustes necessários na API. O primeiro deles é receber de todos os controllers que possuem um método index, os parâmetros de listagem de dentro dos query params. Anteriormente isso estava sendo enviado pelo body da requisição mas o browser não consegue enviar parâmetros pelo body numa requisição do tipo GET.

<br>

### :pushpin: Agendamentos no mesmo horário

<br>

Continuando com os ajustes na API, outro problema que acabou não sendo percebido é que ao criar um novo agendamento, o service busca apenas se já existe um agendamento criado para aquele horário mas sem verificar se esse agendamento pertence ao mesmo prestador da solicitação em questão. Correção dessa pequena falha.

<br>

### :pushpin: Dias indisponíveis no mês

Adição de um passo a mais na verificação de disponibilidade de um dia. Atualmente, um dia só estará indisponível se ele possuir todos os 10 agendamentos, mas e se ele estiver numa data passada?

<br>

### :pushpin: Clientes dos agendamentos

Correção de uma query do banco na listagem de agendamentos de um prestador para que traga mais informações necessárias afim de suprir mais uma necessidade do front-end: Os dados do usuário que fez os agendamentos.

Para maiores informações sobre eager e lazy loading, [clique aqui](https://github.com/typeorm/typeorm/blob/master/docs/eager-and-lazy-relations.md)

<br>

### :pushpin: Serialização no cache

Implementação da serialização na listagem de agendamentos onde as informações dos usuários também são retornadas, afim de evitar que a senha seja retornada e também para garantir que a url do avatar também seja retornada com esses dados.

<br>

### :pushpin: Organizando Insomnia

Organização das rotas que estão cadastradas no Insomnia para facilitar a visualização ao fazer os testes no decorrer do desenvolvimento da aplicação.

Serão utilizadas algumas ferramentas para automatizar alguns processos como o envio de tokens obtidos em outra requisição.

**Dica**
[Masterizando o Insomnia | Masterclass #05](https://youtu.be/3tB0uDliS6Y)

<br>

---

<br>

## :sparkles: Recuperação de senha

<br>

### :pushpin: Criando página de recuperação

Criação da tela de recuperação de senha com reaproveitamento de tela já existente, mantendo campos e botões que serão utilizados e realizando a chamada à API.

<br>

### :pushpin: Enviando formulário a API

Realização do envio do formulário à API para que recebimento de um link de recuperação no e-mail informado, adicionando os toasts de acordo com a resposta da requisição e dando um retorno visual de carregamento para o usuário.

<br>

### :pushpin: Criando página de redefinição

Criação da página para o reset da senha assim que o usuário clicar no link enviado para o e-mail.

<br>

### :pushpin: Implementando redefinição

Realização de uma chamada à API enviando o token e a nova senha com a sua confirmação.

<br>

---

<br>

## :sparkles: Dashboard

<br>

### 📌 Criando Header

Ciação do header da página de dashboard da aplicação, implementando a estrutura, o CSS e conectando com a API para preenchimento das informações com dados reais.

<br>

### 📌 Próximo agendamento

Início da parte de listagem de agendamentos, criando a estrutura e estilização para o card do próximo agendamento, ou seja, o agendamento que fica no topo do dashboard do prestador.

<br>

### 📌 Listagem de agendamentos

Criação da estrutura e estilização para a listagem dos agendamentos da parte da manhã e tarde, já pensando no funcionamento real da aplicação quando o calendário estiver construído, para mudar a listagem quando uma nova data for selecionada.

<br>

### 📌 Calendário e estilizações

Adição do componente de calendário na aplicação, e mudança da estilização para que fique de acordo com o layout. Adição das funções para que a seleção de datas funcione.

<br>

### 📌 Disponibilidade do mês

Conexão da aplicação com a API para o funcionamento correto, exibindo a disponibilidade de agendamentos no calendário e fazendo novas chamadas à API sempre que o usuário selecionar uma data diferente nele.

<br>

### 📌 Agendamentos da API

Tratamento de como as informações de agendamentos e mudanças de datas no calendário devem refletir no funcionamento da aplicação, fazendo novas chamadas à API para exibir os dados dos usuários que possuem agendamento para determinado dia.

<br>

### 📌 Exibindo agendamentos em tela

Exibição dos agendamentos em tela e separação em manhã e tarde. Para manipulação de uma informação que está vindo do back-end antes de exibir no componente, será utilizado o hook useMemo.

<br>

### 📌 Finalizando listagem de agendamentos

Finalização do dashboard com a exibição do próximo agendamento na página para que esteja sempre no topo.

<br>

## :sparkles: Perfil do usuário

<br>

### 📌 Página de perfil

Construção da página de perfil completa e configuração para exibir as informações do usuário logado assim que clicar no nome pelo header do dashboard.

<br>

### 📌 Troca de avatar

Envio de um novo avatar para atualização de perfil do usuário. Essa atualização de avatar ocorre em uma requisição diferente da atualização de dados cadastrais, portanto, faremos duas requisições separadas para satisfazer os requisitos da aplicação.

<br>

### 📌 Alteração dos dados

Finalização da atualização de informações do perfil, fazendo as validações com o Yup para os campos preenchidos, exibições de toasts e envio do formulário à API.

<br>

# :rocket: Tecnologias, Frameworks e Dependências

- [ReactJs](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Styled-components](https://styled-components.com/)
- [React-icons](https://www.npmjs.com/package/react-icons)
- [Polished](https://github.com/styled-components/polished)
- [Unform](https://www.npmjs.com/package/@rocketseat/unform)
- [Yup](https://www.npmjs.com/package/yup)
- [Cors](https://www.npmjs.com/package/cors)
- [Uuid](https://www.npmjs.com/package/uuid)
- [React-spring](https://www.react-spring.io)

<br>

# :link: Como baixar o projeto

<br>

```js
// Clonar repositório
$ git clone https://github.com/nlnadialigia/GoStack.git

// Acessar diretório
$ cd GoStack/GoStack-N5/gobarber-web

// Instalar dependências
$ yarn

// Iniciar projeto
$ yarn start
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

