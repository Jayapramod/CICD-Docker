# Docker CI/CD Demo

A demonstration of a modern CI/CD pipeline using Node.js, Docker, and GitHub Actions.

## 🚀 Tech Stack

- **Backend:**
  - Node.js (v20)
  - Express.js (v4.18.2)

- **Containerization:**
  - Docker
  - Docker Compose
  - Node:20-alpine base image

- **CI/CD:**
  - GitHub Actions
  - Docker Hub Registry

## 📋 Features

- Express.js REST API
- Health Check Endpoint
- Automated Testing
- Docker Containerization
- Automated CI/CD Pipeline
- Docker Hub Integration

## 🏗️ Project Structure

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

## 🛠️ API Endpoints

- `GET /` - Main endpoint returning welcome message
- `GET /healthz` - Health check endpoint returning status

## 🚀 Getting Started

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

## 🔄 CI/CD Pipeline

### Workflow Stages

1. **Build and Push:**
   - Builds Docker image
   - Pushes to Docker Hub
   - Tags with latest and commit SHA

2. **Container Test:**
   - Pulls the image
   - Runs container
   - Tests API endpoints

### Automated Tests

The pipeline automatically tests:
- Application startup
- Main endpoint response
- Health check endpoint

## 🐳 Docker Hub

The application is automatically published to Docker Hub.

Pull the latest version:
```bash
docker pull jayapramod/docker-ci-cd-demo:latest
```

## 💻 Development Workflow

1. Make changes to the code
2. Commit and push to main branch
3. GitHub Actions automatically:
   - Builds new Docker image
   - Pushes to Docker Hub
   - Runs all tests
   - Reports status

## 🔧 Environment Variables

- `PORT`: Application port (default: 3000)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.
