# MongoDB Service Template

A TypeScript-based MongoDB service template
The connection string for the docker cluster is:
`mongodb://mongodb1:27017,mongodb2:27017,mongodb3:27017/?replicaSet=rs0`

## Features

- Integration with MongoDB
- Docker Compose setup for local development
- TypeScript support

## Prerequisites

- Node.js (v23 or later)
- Docker and Docker Compose
- Make (optional, for using Makefile commands)

## Getting Started

### Local Development

1. Install dependencies:

   ```bash
   make install
   ```

2. Start the development server:
   ```bash
   make dev
   ```

### Using Docker

1. Build the Docker images:

   ```bash
   make docker-build
   ```

2. Start the services:

   ```bash
   make docker-up
   ```

3. Stop the services:
   ```bash
   make docker-down
   ```

## Available Endpoints

- To be defined

## Project Structure

```
.
├── src/
│   └── index.ts
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
├── Makefile
└── README.md
```

## Environment Variables

To be defined

## Development Commands

- `make install`: Install dependencies
- `make build`: Build the TypeScript code
- `make dev`: Start development server
- `make start`: Start production server
- `make docker-build`: Build Docker images
- `make docker-up`: Start Docker services
- `make docker-down`: Stop Docker services
- `make clean`: Clean build artifacts
