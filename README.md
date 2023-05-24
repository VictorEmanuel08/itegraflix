# ITEGRAFLIX

Esta é uma aplicação web de catálogo contendo os 10 filmes mais populares da atualidade, através da APi do The Movie Database (TMDB).

## Instalação
Certifique-se de ter o Node.js instalado em sua máquina.

Faça o clone deste repositório para o seu ambiente local.

Acesse a pasta do projeto e execute o seguinte comando no terminal para instalar as dependências:

### `npm install`

## Iniciando
Execute o seguinte comando no terminal para iniciar a aplicação:

### `npm start`

A aplicação será executada no seu navegador padrão no endereço (http://localhost:3000).

## Estilização
O framework de CSS <strong>Tailwind</strong> foi utilizado para estilização.

A personalização de variáveis da aplicação pode ser visualizada através do arquivo `tailwind.config.js`. 
Em caso de dúvidas, consulte a documentação do Tailwind CSS (https://tailwindcss.com) para obter mais detalhes.

## API
A API do The Movie DataBase (TMDB), acessada no endereço (https://developer.themoviedb.org/v4/reference/intro/getting-started) foi disponibilizada para poder dar prosseguimento à aplicação. As variáveis de ambiente estão no arquivo `.env`, na pasta raiz do projeto. 

Cada usuário possui a sua própria API Key. Atenção a isso.

### Edit

#### .env
Na linha 15 do arquivo `index.js` que está na pasta `src/pages/home` e na linha 20 do arquivo `index.js` que está na página `src/pages/SoloMovie`, deve-se substituir o `${process.env.REACT_APP_API_KEY}` por `9df3e0996c1d5cb4477ac00f77d54220`(minha API Key), uma vez que o arquivo `.env` não pode ser subido para o github.

#### tailwind.config.js
O arquivo de configuração de estilização do tailwind (`tailwind.configs.js`) não pode ser subido no github, por tanto, a sua configuração é:
``` 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colorWhite: "#E7E4E4",
        colorGrey: "#919191",
        colorOrange: "#FB8200",
        colorBlack: "#2D2B2B",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
``` 

## Resposividade
Infelizmente, a responsividade não foi aplicada deevido às dúvidas nesse quesito em relação ao framework. Contudo, os próximos 'commits' serão em prol disso.