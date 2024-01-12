# Zaian Chat App

A Zaian Chat App é uma aplicação de chat moderna, desenvolvida utilizando React, Prisma, Typescript e Tailwind. O aplicativo foi projetado para oferecer uma experiência de chat interativa, aproveitando os recursos avançados de streaming.

## Pré-Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:
- Node.js (versão 18.x ou superior)
- Yarn (versão 1.x ou superior)
- Docker (opcional, apenas se for usar o banco de dados PostgreSQL via Docker)

## Configuração Inicial

### Obtendo a API Key

1. Acesse [Replicate API](https://replicate.com/account/api-tokens) para gerar sua chave de API.
2. Anote a chave gerada, pois ela será utilizada na configuração do projeto.

### Configuração do Ambiente de Desenvolvimento

1. Clone o repositório do projeto para sua máquina local.
2. Abra o terminal ou bash no diretório do projeto clonado.

### Instalação das Dependências

Execute os seguintes comandos no terminal para instalar as dependências necessárias:

```bash
$ yarn install
```

### Configurando Variáveis de Ambiente

Crie um arquivo `.env` no diretório raiz do projeto e configure as variáveis de ambiente necessárias (por exemplo, credenciais do banco de dados, chaves API, etc.).

### Configuração do Banco de Dados

#### Usando PostgreSQL Local

Se você tiver uma instância local do PostgreSQL, configure-a com as credenciais fornecidas no arquivo `.env`.

#### Usando Docker

Se você não tiver um banco de dados PostgreSQL local, pode usar o Docker para subir uma instância. No diretório do projeto, execute:

```bash
$ docker-compose up -d
```

Isso iniciará uma instância do PostgreSQL que pode ser usada com a aplicação.

### Configuração do Banco de Dados com Prisma

Para configurar o banco de dados, execute:

```bash
$ yarn prisma:migrate
```

## Executando a Aplicação

Para iniciar a aplicação, execute:

```bash
$ yarn dev
```

A aplicação estará rodando no modo de desenvolvimento e poderá ser acessada em: [http://localhost:3000](http://localhost:3000).

---