# Listagem de filmes

O projeto consiste numa aplicação que traz a listagem de filmes da [API do The Movie DB](https://www.themoviedb.org/documentation/api), com busca e paginação além de renderizar a página de cada filme.

**Conheça mais sobre a The Movie DB clicando no logo abaixo:**

[<img src="/images/tmdb_logo.svg"/>](https://www.themoviedb.org/)

## Como testar a aplicação

**1.** Clone este repositório com o seguinte comando:

`git clone git@github.com:Kamila-Vieira/movies.git`

**2.** Instale as dependências do projeto com um dos comandos:

`npm install`

ou

`yarn`

**3.** Crie o arquivo `.env` na raíz do projeto, copie as informações do arquivo de exemplo `.env.example` e cole no arquivo que você criou.

**4.** Você vai precisar gerar uma Api key, saso não tenha cadastro no site acesse [cadastro TMDB](https://www.themoviedb.org/signup) para se cadastrar ou acesse [login TMDB](https://www.themoviedb.org/login) para fazer login, depois acesse [Introdução API TMDB](https://developers.themoviedb.org/3/getting-started/introduction) e siga o passo a passo para a gerar uma nova Api key.

**5.** Após gerar sua Api key, copie e cole no arquivo `.env` no local indicado, no fim seu conteúdo deve ser o seguinte:

`REACT_APP_API_KEY=key`

Onde `key` deve ser a Api key gerada.

**6.** Rode a aplicação com um dos comandos:

`npm start`

ou

`yarn start`
