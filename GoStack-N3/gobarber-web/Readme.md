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

<br>

### :pushpin: Habilitando CORS na API

Conexão da aplicação com a parte da API que já foi desenvolvida. 
Necessária a instalção, na API, do pacote de segurança chamado CORS. É ele quem define qual site pode acessar a aplicação.

```bash
yarn add cors 
```

<br>

### :pushpin: API de Contexto

Adição da funcionalidade do React => *Context API* (ou API de Contexto).

Essa API é muito útil quando queremos que um estado seja compartilhado entre um ou mais componentes que não estejam diretamente conectados, ou seja, onde não há a possibilidade de passar esse estado por dentro de um componente pai para um componente filho.

<br>

### :pushpin: Login pelo Contexto

Isolamento do contexto de autenticação, deixando as funções relacionadas diretamente à esse contexto no mesmo arquivo que
ele para que nós não precisemos "sujar" o componente *App*.

Configuração do axios para que seja possível realizar as requisições do front-end à nossa API.

<br>

### :pushpin: Mantendo usuário no storage

Persistência dos dados do usuário logado no storage do navegador. Isso irá permitir que a aplicação mantenha sempre o usuário logado desde que o token esteja válido, tirando assim, a necessidade de fazer um novo login a cada vez que a aplicação for acessada.

<br>

### :pushpin: Criando hook useAuth

Criação de hook próprio que será responsável por retornar os métodos de autenticação e as informações salvas no estado do contexto. Dessa forma fica muito mais fácil manipular o estado e as funções do contexto de qualquer lugar da nossa aplicação.

<br>

### :pushpin: Logout da aplicação

 Implementação da função responsável por deslogar o usuário, ou seja, excluir os dados salvos no storage e estado do contexto.

<br>

---

<br>

## :sparkles: Mensagem de toast

Toasts são mensagens pop-up adicionadas para exibir uma mensagem a um usuário. Pode ser uma mensagem de sucesso, mensagem de aviso ou uma mensagem personalizada. 

<br>

### :pushpin: Estrutura de Toasts

Criação da estrutura e estilização para os três tipos de Toast que serão usados: sucesso, alerta e erro.
<br>

### :pushpin: Criando hook de toast

Construção um hook para que a utilização de toasts seja dinâmica de acordo com o que nossa aplicação precisar exibir e remover da tela. Para isso serão aplicados os mesmos conceitos de contexto usados anteriormente com a autenticação do usuário.

<br>

### :pushpin: Adicionando e removendo Toasts

Implementação das funções de adição e remoção de um toast em tela que, até então, estão vazias e aplicação de uma funcionalidade para que o toast seja excluído automaticamente após um certo tempo mesmo que o usuário não clique no botão de fechar.

<br>

### :pushpin: Animando Toasts

Aplicação de efeitos de transição na adição e remoção de um toast usando o pacote de animações `react-spring`. Isso irá fazer com que os toasts tenham um efeito mais "leve" ao aparecerem ou serem removidos.

<br>

---

<br>

## :sparkles: Rotas da aplicação

<br>

### :pushpin: Configurando Rotas

Configuração do pacote react-router-dom na aplicação, para que ela consiga fazer a troca de páginas, e adição de algumas animações nas páginas da aplicação.

<br>

### :pushpin: Rotas autenticadas

Implementação do controle de rotas para que o usuário, por exemplo, acesse o dashboard apenas se ele já estiver autenticado. Caso o contrário, ele deve ser redirecionado à página de login.

<br>

### :pushpin: Finalizando App

Finalização do App com a implementação nas páginas de signIn e signUp das mensagens Toast de sucesso quando da autenticação.

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

