# Items Management API

A RESTful Express.js API for managing product items with authentication and CORS support. This backend service powers a Next.js frontend store application.

**Live Frontend:** https://n-ext-js-store-client-git-main-alamin-islam0s-projects.vercel.app/items

## ✨ Key Features

### 🔐 Security

- **Environment Variables**: All sensitive data stored in `.env` file (credentials, API keys, tokens)
- **CORS Configuration**: Enabled for frontend communication from `http://localhost:3000`
- **Cookie Parser**: Support for cookie-based authentication
- **Mock Authentication**: JWT token generation for login functionality

### 📦 Product Management

- **Get All Items**: Retrieve complete product catalog
- **Get Single Item**: Fetch details of a specific product by ID
- **Add New Item**: Create new products with validation (name and price required)
- **Mock Data**: 6 pre-loaded premium products with images and descriptions

### 🛠️ Technical Features

- **Express.js**: Fast and lightweight web framework
- **Body Parser**: JSON and URL-encoded request handling
- **CORS Support**: Cross-Origin Resource Sharing enabled
- **Error Handling**: Proper HTTP status codes and error messages
- **Environment Configuration**: Dynamic port and origin settings via `.env`

## 📋 API Endpoints

| Method | Endpoint     | Description         | Auth       |
| ------ | ------------ | ------------------- | ---------- |
| GET    | `/`          | Health check        | No         |
| POST   | `/login`     | User authentication | No         |
| GET    | `/items`     | Get all products    | No         |
| GET    | `/items/:id` | Get product by ID   | No         |
| POST   | `/items`     | Create new product  | Yes (Mock) |

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the root directory:

```env
PORT=5001
CORS_ORIGIN=http://localhost:3000
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=123456
JWT_SECRET=mock-jwt-token-123456789
```

### Running the Server

**Development Mode** (with auto-reload):

```bash
npm run dev
```

**Production Mode**:

```bash
npm start
```

Server will run on `http://localhost:5001`

## 📊 Sample Product Data

The API comes with 6 pre-loaded products:

1. **Premium Wireless Headphones** - $299.99
2. **Ergonomic Office Chair** - $199.50
3. **Mechanical Keyboard** - $129.00
4. **Smart Watch Series 5** - $349.99
5. **Minimalist Desk Lamp** - $45.00
6. **4K Ultra HD Monitor** - $499.00

## 🔑 Login Credentials (Mock)

```
Email: admin@example.com
Password: 123456
```

## 📦 Dependencies

- `express` - Web framework
- `cors` - Cross-Origin Resource Sharing
- `body-parser` - Request body parsing
- `cookie-parser` - Cookie parsing
- `dotenv` - Environment variable management

## 👨‍💻 Development Dependencies

- `nodemon` - Auto-restart server on file changes

## 🔒 Security Notes

⚠️ **Important**: This is a demonstration project with mock authentication. For production:

- Implement real JWT authentication
- Use bcrypt for password hashing
- Add proper database instead of in-memory storage
- Implement request validation and sanitization
- Add rate limiting and request size limits
- Use HTTPS only
- Keep `.env` out of version control (included in `.gitignore`)

## 📁 Project Structure

```
items-management-api/
├── index.js          # Main application file
├── package.json      # Project dependencies
├── .env              # Environment variables (not in git)
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements.

## 📝 License

ISC

---

**Created by:** Alamin Islam  
**Repository:** https://github.com/alamin-islam0/Items-management-api.git
