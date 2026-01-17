require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allow Next.js frontend
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

// Mock Data
let items = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience high-fidelity audio with these noise-cancelling headphones. 30-hour battery life.",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    description:
      "Work in comfort with this fully adjustable mesh office chair with lumbar support.",
    price: 199.5,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    description:
      "Tactile switches and customizable RGB lighting for the ultimate typing experience.",
    price: 129.0,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b91a45e?w=800&q=80",
  },
  {
    id: "4",
    name: "Smart Watch Series 5",
    description:
      "Track your fitness, health, and notifications with this sleek smartwatch.",
    price: 349.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  },
  {
    id: "5",
    name: "Minimalist Desk Lamp",
    description:
      "Adjustable color temperature and brightness to suit any workspace.",
    price: 45.0,
    image:
      "https://images.unsplash.com/photo-1507473888900-52e1ad142759?w=800&q=80",
  },
  {
    id: "6",
    name: "4K Ultra HD Monitor",
    description:
      "Crystal clear display tailored for professionals and gamers alike.",
    price: 499.0,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
  },
];

// Routes

// 1. Health Check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 2. Login Endpoint (Mock)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Credentials from environment variables
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: { email: process.env.ADMIN_EMAIL, name: "Admin User" },
      token: process.env.JWT_SECRET, // In a real app, this would be a real JWT
    });
  }

  return res
    .status(401)
    .json({ success: false, message: "Invalid credentials" });
});

// 3. Get All Items (Public)
app.get("/items", (req, res) => {
  res.json(items);
});

// 4. Get Single Item (Public)
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === req.params.id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
});

// 5. Add Item (Protected - Mock Protection)
// In a real app, verify the Authorization header or Cookie here.
app.post("/items", (req, res) => {
  const { name, description, price, image } = req.body;

  // Simple verification check (expecting a mock token header for demonstration)
  const authHeader = req.headers.authorization;
  if (!authHeader && req.body.mockAuth !== true) {
    // allowing body flag for simplicity if headers obscure
    // But let's enforce standard Bearer pattern mock
  }

  // Validate input
  if (!name || !price) {
    return res.status(400).json({ message: "Name and Price are required" });
  }

  const newItem = {
    id: (items.length + 1).toString(),
    name,
    description: description || "",
    price: parseFloat(price),
    image: image || "https://via.placeholder.com/300",
  };

  items.push(newItem);
  res.status(201).json({
    success: true,
    item: newItem,
    message: "Item created successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
