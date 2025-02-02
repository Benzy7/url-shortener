# URL Shortener 🔗

A full-stack URL shortening service with a **React frontend**, **Node.js/Express backend**, and **MongoDB database**, fully Dockerized for seamless deployment.

## Live Demo

Check out the live version of the URL Shortener at [Live Demo](https://short-url.benzy.cc).

## Features ✨
- Shorten long URLs to compact format
- Redirect to original URLs via short links
- Responsive web interface with Bootstrap
- REST API endpoints with validation
- Docker containerization
- MongoDB for persistent data storage
- Nginx reverse proxy for secure access

## Tech Stack 🛠️
**Frontend**
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)  ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap)

**Backend**
![Node.js](https://img.shields.io/badge/Node.js-22.12.0-339933?logo=node.js)  ![Express](https://img.shields.io/badge/Express-4.21.2-000000?logo=express)  ![MongoDB](https://img.shields.io/badge/MongoDB-8.9.6-47A248?logo=mongodb)

**Infrastructure**
![Docker](https://img.shields.io/badge/Docker-24.0.7-2496ED?logo=docker)  ![Nginx](https://img.shields.io/badge/NGINX-1.25.3-009639?logo=nginx)

## Project Structure 🗂️
```
url-shortener/
├── backend/
│   ├── src/
│   │   ├── configs/       # Configuration files
│   │   ├── controllers/   # Business logic
│   │   ├── middlewares/   # Express middlewares
│   │   ├── models/        # MongoDB schemas
│   │   ├── routes/        # API endpoints
│   │   ├── services/      # Service layer
│   │   ├── tests/         # Unit tests
│   │   ├── utils/         # Helper functions
│   │   ├── validators/    # Request validation
│   │   └── app.js         # Server entry point
│   ├── Dockerfile         # Backend Docker configuration
│   └── package.json
│
├── frontend/
│   ├── public/            # Static assets
│   ├── src/               # React components
│   ├── Dockerfile         # Frontend Docker configuration
│   └── package.json
│
└── README.md
```

## Prerequisites 🗂️
- **Docker** & **Docker Compose** installed
- **Node.js** (v18+)
- **MongoDB** (Atlas or use the Dockerized version)


## Installation ⚙️
### Backend Setup
```bash
cd backend
npm install

# Create environment file
cp .env.example .env
# Edit .env with your MongoDB credentials

# Start development server
node app.js
```

### Frontend Setup
```bash
cd frontend
npm install

# Create environment file
cp .env.example .env
# Set API base URL (REACT_APP_API_BASE_URL=http://localhost:5000/api)

# Start development server
npm start
```

## API Documentation 📚
### Endpoints
| Method | Endpoint    | Description               | Parameters |
|--------|------------|---------------------------|------------|
| POST   | /api/shorten | Create short URL        | `{ "longUrl": "string" }` |
| GET    | /:shortId  | Redirect to original URL | URL parameter: `shortId` |

### Example Requests
#### Create Short URL:
```http
POST /api/shorten
Content-Type: application/json

{
  "longUrl": "https://example.com/very-long-url"
}
```
#### Response:
```json
{
  "success": true,
  "shortUrl": "http://localhost:5000/abc123",
}
```

## Configuration ⚙️
### Environment Variables
#### Backend (.env):
```ini
ENV=dev

PROTOCOL=http
HOST=localhost
PORT=3010

MONGODB_URI=mongodb://mongo:27017/url-shortener

FRONT_URL=http://localhost:3000
```
#### Frontend (.env):
```ini
REACT_APP_API=http://localhost:3010/api
```

## Deployment 📦
For production deployment, consider:
- Using Nginx as a reverse proxy
- Setting up SSL with Let's Encrypt
- Configuring a domain name with a DNS provider


## Contributing 🤝
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

## License 📚
MIT License - See `LICENSE` for details.

## Contact 📧
Project Maintainer: **Benzy7**
- **GitHub Issues**: [Report Bugs / Feature Requests](https://github.com/Benzy7/url-shortener/issues)
