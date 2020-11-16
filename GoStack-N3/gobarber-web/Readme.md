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

Criação da versão web da aplicação GoBarber que será utilizada pelos usuários que prestam serviços dentro da aplicação.

<br>

# :book: Aulas

## :sparkles: Estrutura das páginas

<br>

### :pushpin: Configurando Estrutura

Configuração inicial do projeto usando a CLI do create-react-app e também usaremos a mesma configuração do ESLint, Prettier e EditorConfig que foi utilizada no [GitHub Explorer](https://github.com/nlnadialigia/GoStack/tree/master/GoStack-N3/primeiro-projeto-react).

```bash
npx create-recat-app gobarber-web --template=typescript
```

<br>

### :pushpin: Figma GoBarber Web

<br>

<img src="../../assets/figma.png" width="400">

<br><br>

### :pushpin: Estilos globais

Configuração dos estilos globais da aplicação, resetando as configurações padrão do browser e alterando estilos que serão compartilhados entre as páginas.

<br>

### :pushpin: Página de login

Estruturação e estilização da página de login do GoBarber.

<img src="../../assets/signin.png" width="400">

<br><br>

### :pushpin: Isolando componentes

Isolamento de alguns componentes que serão reutilizados em mais de uma parte da aplicação afim de facilitar ainda mais o desenvolvimento evitando a repetição de código desnecessário.

<br>

### :pushpin: Página de cadastro

Desenvolvimento a página de cadastro do GoBarber utilizando os mesmos componentes que foram isolados na aula anterior.

<img src="../../assets/signup.png" width="400">

<br><br>

### :pushpin: Utilizando Unform

Utilização do Unform que é um pacote para ldiar com formulários que tira a necessidade de criar um estado para cada input fazendo com que os componentes não tenham renderizações desnecessárias. 

```bash
yarn add @unform/core @unform/mobile
```

<br>

### :pushpin: Usabilidade do input

Melhorias na usabilidade dos inputs, como por exemplo mudar a cor do ícone e adicionar uma borda ao receber foco para indicar ao usuário qual input está selecionado. 

<br>

:bulb: **useCalback** *⇒ forma de criar funções dentro do componente que não são recriadas toda vez que o componente renderiza ⇒ ficam salvas na memória ⇒ ``useCallback(( ) ⇒ { }, [ ])`` => se a chaves estiverem vazias ⇒ a função nunca será recriada*

<br>

### :pushpin: Validando cadastro

Validação do cadastro para verificar se o valor digitado nos campos estão corretos. Para isso foi utilizada a biblioteca `yup`.

```
yarn add yup
```

<br>

:bulb: *Com o **Yup**, criamos um objeto formatado que se parece com o nosso esquema pretendido para um objeto e, em seguida, usamos as funções do utilitário Yup para verificar se nossos objetos de dados correspondem a esse esquema e assim, validando-os.*

<br>

### :pushpin: Exibindo erros no Input

Tratativa de erros mas agora, exibindo os erros em tela para que o formulário tenha mais usabilidade.

<br>

### :pushpin: Criando tooltip de erros

Continuação da tratativa de erros, agora com a utilização de `tolltip`, que são dicas que exibem texto informativo quando os usuários passam o mouse, focalizam ou tocam em um elemento.

<br>

### :pushpin: Validação de login

Utilziação dos mesmos conceitos de validação do formulário de cadastro no formulário de login para que o tooltip seja exibido corretamente na página.

<br>

---

<br>

## :sparkles: Autenticação

### :pushpin: Habilitando CORS na API

### :pushpin: API de Contexto

### :pushpin: Guia de Hooks e Context API

### :pushpin: Login pelo Contexto

### :pushpin: Mantendo usuário no storage

### :pushpin: Criando hook useAuth

### :pushpin: Logout da aplicação

<br>

---

<br>

## :sparkles: Mensagem de toast

### :pushpin: Estrutura de Toasts

### :pushpin: Criando hook de toast

### :pushpin: Adicionando e removendo Toasts

### :pushpin: Animando Toasts

<br>

---

<br>

## :sparkles: Rotas da aplicação

### :pushpin: Configurando Rotas

### :pushpin: Rotas autenticadas

### :pushpin: Finalizando App

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



<br>

# :link: Como baixar o projeto

<br>

```js
// Clonar repositório
$ git clone https://github.com/nlnadialigia/GoStack.git

// Acessar diretório
$ cd GoStack/GoStack-N3/gobarber-web

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

