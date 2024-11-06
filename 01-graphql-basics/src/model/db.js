let users = [
  { id: "u001", name: "monica", age: 22 },
  { id: "u002", name: "rachel", age: 23 },
  { id: "u003", name: "ross", age: 24 },
];

let posts = [
  {
    id: "p001",
    title: "GraphQL 101",
    body: "Begenning with GraphQL",
    published: false,
    author: "u003",
  },
  {
    id: "p002",
    title: "Advanced NodeJS",
    body: "For mastering node",
    published: true,
    author: "u002",
  },
  {
    id: "p003",
    title: "React Refrsh",
    body: "Write less do more",
    published: false,
    author: "u003",
  },
  {
    id: "p004",
    title: "Anxious Angular",
    body: "The CheatSheet",
    published: true,
    author: "u001",
  },
];

let comments = [
  { id: "c001", text: "I Like it", postId: "p003", creator: "u002" },
  { id: "c002", text: "Luv it", postId: "p001", creator: "u003" },
  { id: "c003", text: "Not Bad", postId: "p003", creator: "u001" },
  { id: "c004", text: "Just like that", postId: "p002", creator: "u002" },
];

const db = { users, posts, comments };

export default db;

// p003 - c001, c003
