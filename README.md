# GREEN-API Interface

A web interface for interacting with GREEN-API's WhatsApp messaging services. This application allows users to connect to their GREEN-API instance and use various API methods including sending messages, files, and retrieving instance settings.

## Features

- Connection management for GREEN-API instances
- Support for multiple API methods:
  - getSettings
  - getStateInstance
  - sendMessage
  - sendFileByUrl
- Real-time API response display
- Clean and responsive user interface

## Prerequisites

- Node.js 18+ for local development
- Docker and Docker Compose for containerized deployment
- GREEN-API account with:
  - Instance ID
  - API Token
  - Connected WhatsApp number

## Local Development Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd green-api-interface
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Docker Deployment

1. Build and run using Docker Compose:
   ```bash
   docker-compose up -d
   ```

2. Access the application at `http://localhost:8080`

To stop the container:
```bash
docker-compose down
```

### Manual Docker Commands

If you prefer to run Docker commands manually:

1. Build the image:
   ```bash
   docker build -t green-api-interface .
   ```

2. Run the container:
   ```bash
   docker run -d -p 8080:80 green-api-interface
   ```

## Production Deployment

For production deployment:

1. Build the production assets:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` directory, ready to be served by any web server

## Usage Instructions

1. Create a GREEN-API account and get your instance credentials
2. Enter your Instance ID and API Token in the connection form
3. Use the available API methods:
   - Click "getSettings" to view instance configuration
   - Click "getStateInstance" to check instance status
   - Use the message form to send text messages
   - Use the file form to send files via URL

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Docker Commands Reference

### Build the Image
```bash
docker build -t green-api-interface .
```

### Run the Container
```bash
docker run -d -p 8080:80 green-api-interface
```

### View Logs
```bash
docker logs <container-id>
```

### Stop Container
```bash
docker stop <container-id>
```

### Remove Container
```bash
docker rm <container-id>
```

### Remove Image
```bash
docker rmi green-api-interface
```