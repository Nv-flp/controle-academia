# Controle de Academia

API REST para controle de treinos de musculação: cadastro de exercícios, carga, repetições e séries.

## Sobre o projeto

Projeto construído do zero, sem uso de gerador de código, com o objetivo de
dominar lógica de programação, arquitetura de uma API REST e persistência em
banco relacional. A primeira versão gravava os dados em arquivo JSON e foi
migrada para MySQL.

## Stack

Node.js · Express · MySQL · mysql2 · dotenv

## Funcionalidades

- CRUD completo de treinos via API (GET, POST, PUT, DELETE)
- Persistência em MySQL com pool de conexões
- Credenciais isoladas em variáveis de ambiente

## Status

Backend funcional. Front-end 

## Como rodar

```bash
git clone https://github.com/Nv-flp/controle-academia.git
cd controle-academia
npm install
cp .env.example .env   # preencha com suas credenciais
node src/servidor.js
```

A aplicação sobe em `http://localhost:3000`.

## Aprendizados

As anotações de estudo feitas durante a construção estão em [APRENDIZADOS.md](APRENDIZADOS.md).