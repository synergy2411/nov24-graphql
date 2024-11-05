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
- Schema Definition Language : Syntax for writing Schema
- Schema : contract b/w client and server
- Structure vs Behaviour (Resolvers)
- GraphQL Operations -
  > Query : fetching the data
  > Mutation : Create, Update and Delete
  > Subscription: Realtime updates
