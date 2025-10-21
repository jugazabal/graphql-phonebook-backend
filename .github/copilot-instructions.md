# GraphQL Phonebook Backend - Copilot Instructions

This is a GraphQL phonebook backend project built with Apollo Server and Node.js.

## Project Overview

- **Technology**: Node.js, GraphQL, Apollo Server
- **Purpose**: Backend API for managing phonebook contacts
- **Main File**: `index.js`
- **Development**: Uses nodemon for auto-reload

## Development Workflow

1. Start development server: `npm run dev`
2. Server runs on `http://localhost:4000/`
3. GraphQL Playground available for testing queries
4. Auto-reload on file changes

## Key Components

- **Schema**: Defined in `typeDefs` using GraphQL SDL
- **Resolvers**: Query functions for fetching data
- **Sample Data**: Pre-populated persons array for testing
- **Queries**: `allPersons`, `personCount`, `findPerson`

## Common Tasks

- Adding new queries: Update both `typeDefs` and `resolvers`
- Testing queries: Use GraphQL Playground at server URL
- Adding mutations: Extend schema with Mutation type
- Data persistence: Consider adding database integration

## Project Structure

- `index.js` - Main server implementation
- `package.json` - Dependencies and scripts
- `README.md` - Project documentation