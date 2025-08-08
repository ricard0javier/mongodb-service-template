# MongoDB Service Template - NodeJS

A TypeScript-based MongoDB service template
The connection string for the docker cluster is:
`mongodb://mongodb1:27017,mongodb2:27018,mongodb3:27019/?replicaSet=rs0`

## Features

- Integration with MongoDB
- Docker Compose setup for local development
- TypeScript support

## Prerequisites

- Node.js (v23 or later)
- Docker and Docker Compose
- Make (optional, for using Makefile commands)

## Getting Started

Start by adding code in the [index.ts](src/index.ts) or using the [playground](playground.ipynb)

### Local Development

1. Clean and Install dependencies:

   ```bash
   make clean install
   ```

2. Start the development server:
   ```bash
   make dev
   ```

## Development Commands

- `make clean`: Clean build artifacts
- `make install`: Install dependencies
- `make build`: Build the TypeScript code
- `make dev`: Start development server
- `make start`: Start production server
