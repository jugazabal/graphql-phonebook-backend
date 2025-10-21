# GraphQL Phonebook Backend

A GraphQL server implementation for managing a phonebook application, built with Apollo Server and Node.js.

## Features

- **GraphQL API** with Apollo Server
- **Person Management** - Store contacts with name, phone, street, and city
- **Query Operations**:
  - Get all persons
  - Get person count
  - Find person by name
- **Real-time Development** with nodemon

## Technology Stack

- **Apollo Server** v4.3.2 - GraphQL server implementation
- **GraphQL** v16.6.0 - Query language and runtime
- **Node.js** - JavaScript runtime
- **Nodemon** - Development server with auto-reload

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fullstack-hy2020/graphql-phonebook-backend.git
   cd graphql-phonebook-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The server will start at `http://localhost:4000/` and GraphQL Playground will be available for testing queries.

## GraphQL Schema

### Types

```graphql
type Person {
  name: String!
  phone: String
  street: String!
  city: String! 
  id: ID!
}
```

### Queries

```graphql
type Query {
  personCount: Int!
  allPersons: [Person!]!
  findPerson(name: String!): Person
}
```

## Sample Data

The server includes sample data for testing:

- Arto Hellas (Espoo)
- Matti Luukkainen (Helsinki) 
- Venla Ruuska (Helsinki)

## Example Queries

### Get all persons:
```graphql
{
  allPersons {
    name
    phone
    street
    city
  }
}
```

### Get person count:
```graphql
{
  personCount
}
```

### Find a specific person:
```graphql
{
  findPerson(name: "Arto Hellas") {
    name
    phone
    street
    city
  }
}
```

## Development

- **Start development server**: `npm run dev`
- **GraphQL Playground**: Visit `http://localhost:4000/` when server is running
- **Auto-reload**: Server automatically restarts when files change

## Project Structure

```
phonebook/
├── index.js              # Main server file with schema and resolvers
├── package.json          # Dependencies and scripts
├── package-lock.json     # Dependency lock file
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

## API Documentation

The GraphQL API provides a self-documenting interface through GraphQL Playground, accessible at `http://localhost:4000/` when the server is running.

## License

ISC License