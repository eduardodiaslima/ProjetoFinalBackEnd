# FilmStore API
# FilmStore Back-End

## Descrição
A **FilmStore API** é uma aplicação backend desenvolvida para gerenciar filmes. Ela permite adicionar, listar, editar e excluir filmes de uma base de dados PostgreSQL. Este projeto foi desenvolvido com **Express**, **TypeScript**, **PostgreSQL** e **Jest** para testes unitários.

## Funcionalidades
- **Adicionar filmes**: Permite adicionar novos filmes com título, descrição, preço e imagem do filme.
- **Listar filmes**: Retorna todos os filmes cadastrados.
- **Editar filmes**: Permite editar as informações de um filme específico.
- **Excluir filmes**: Permite remover um filme da base de dados.

## Tecnologias Utilizadas
- **Node.js**: Para execução do servidor.
- **Express**: Framework para criação de APIs REST.
- **TypeScript**: Superset do JavaScript, que adiciona tipagem estática.
- **PostgreSQL**: Banco de dados relacional para armazenar as informações dos filmes.
- **Jest**: Framework de testes unitários.

## Instalação

### Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
- **Node.js** (Recomendado versão 16 ou superior)
- **PostgreSQL**
- **Git**

### Passos para rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/FilmStore.git
 2. Inicie o servidor:
   npx ts-node src/server.ts

3. /users Para ver os Usuários & /films Para ver os Filmes Cadastrados
   exemplo de Post Usuário:
   curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"name": "Caio Cesar", "email": "caioteste@example.com", "senha": "caioSegura123!"}'
   
   Exemplo de Post Filmes:
   curl -X POST http://localhost:3000/films -H "Content-Type: application/json" -d '{ "title": "Matrix","descricao": "Realidade virtual e inteligência artificial","price": 19.99,"livroImg":       
   "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"}'
