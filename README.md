# Docker CI/CD Demo

A production-ready continuous integration and deployment pipeline implementation using Node.js, Docker, and GitHub Actions.

## Architecture Overview

### Application Layer
- Node.js (v20) - Runtime Environment
- Express.js (v4.18.2) - Web Application Framework

### Container Infrastructure
- Docker - Application Containerization
- Docker Compose - Multi-container Orchestration
- Node:20-alpine - Lightweight Base Image

### CI/CD Infrastructure
- GitHub Actions - Automated Pipeline
- Docker Hub - Container Registry

## Core Features

- RESTful API Implementation with Express.js
- Comprehensive Health Check System
- Automated Test Suite
- Containerized Application Architecture
- Continuous Integration and Deployment Pipeline
- Automated Container Registry Integration

## Project Architecture

```
docker-ci-cd-demo/
├── app/
│   ├── index.js          # Main application file
│   ├── package.json      # Node.js dependencies
│   └── test.js          # Automated tests
├── Dockerfile           # Docker image configuration
├── docker-compose.yml   # Local development container setup
└── .github/
    └── workflows/
        └── ci-cd.yml    # GitHub Actions workflow
```

## API Documentation

### Available Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /        | Main application endpoint - Returns welcome message |
| GET    | /healthz | Health check endpoint - Returns system status |

## Implementation Guide

### Prerequisites

- Node.js v20 or higher
- Docker
- Docker Compose
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Jayapramod/CICD-Docker.git
   cd CICD-Docker
   ```

2. Install dependencies:
   ```bash
   cd app
   npm install
   ```

3. Run tests:
   ```bash
   npm test
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Docker Development

1. Build the image:
   ```bash
   docker build -t docker-ci-cd-demo .
   ```

2. Run the container:
   ```bash
   docker run -p 8080:3000 docker-ci-cd-demo
   ```

Or using Docker Compose:
```bash
docker-compose up
```

## Continuous Integration and Deployment

### Pipeline Architecture

1. **Build and Registry Phase:**
   - Docker Image Construction
   - Registry Publication
   - Version Control Integration
   - Automated Tagging System

2. **Validation Phase:**
   - Container Deployment
   - Runtime Verification
   - Endpoint Validation

### Automated Quality Assurance

The pipeline automatically tests:
- Application startup
- Main endpoint response
- Health check endpoint

## Container Registry Integration

The application is automatically published to the Docker Hub registry.

### Image Retrieval
To obtain the latest version:
```bash
docker pull jayapramod/docker-ci-cd-demo:latest
```

## Development Process

1. Make changes to the code
2. Commit and push to main branch
3. GitHub Actions automatically:
   - Builds new Docker image
   - Pushes to Docker Hub
   - Runs all tests
   - Reports status

## Configuration

### Environment Variables
| Variable | Description | Default |
|----------|-------------|---------|
| PORT     | Application listening port | 3000 |

## Contributing Guidelines

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
s