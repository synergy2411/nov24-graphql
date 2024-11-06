# Break Timing

- 11:45 : 15 minutes
- 1:00 : 45 minutes
- 4:00 : 15 minutes

# REST API

- Over-fetching : fetching more data than required
- Under-fetching: fetching less data than expected
- Server-side approach
- Multiple endpoints

/books - id, isbn, title, numOfPages, ... 25 more fields
/books/199
/books - POST
/books - PATCH
/books - DELETE

/authors - id, name, age, address .... 30 more fields

query {
books {
id
isbn
title
author {
name
address
}
}
}

# JavaScript Runtime

- Client side: Browsers
- Server side: NodeJS Runtime

# NodeJS Installer

- Node Runtime Environment
- Node Package Manager (npm)
- Node Native Modules (http, os, fs, utils, events...)

# GraphQL Terminologies -

- Graph : represents relationship b/w entites
- Scalar Types : holds only single value
- Schema Definition Language (SDL) : Syntax for writing Schema
- Schema : contract b/w client and server
- Structure vs Behaviour (Resolvers)
- GraphQL Operations -
  > Query : fetching the data
  > Mutation : Create, Update and Delete
  > Subscription: Realtime updates

# Steps for Creating GraphQL Server

- Create package.json file
  > npm init -y
- Install GraphQL dependencies
  > npm install graphql graphql-yoga
- Create GraphQL Server with Node HTTP
- Script for running the App
  > "dev:start" : "node server.js"
  > npm run dev:start
- Install nodemon as Dev dependency
  > npm install nodemon -D
- Install graphql import files
  > npm install graphql-import-files

---

- Mutation
- Subscription
- MongoDB (Atlas)
- Prisma (ORM)
- Authentication

---

Mongo Atlas

- username : testuser
- password : yLzupoUcA3qSKrje
- Mongo SRV

## mongodb+srv://testuser:yLzupoUcA3qSKrje@thecluster.e9xsq.mongodb.net/?retryWrites=true&w=majority&appName=TheCluster

# Steps to setup Prisma and Mongo

> npm init -y
> npm install prisma
> npx prisma init
> npx prisma db push
> npm install @prisma/client
> npm install graphql graphql-yoga
> npm install nodemon -D
> npm install bcryptjs

# Two Plugins

- Prettier
- Prisma
