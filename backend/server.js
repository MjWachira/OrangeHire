// backend/server.js
import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
// Use the port from environment variables or default to 5000
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic test route
app.get('/api/status', (req, res) => {
  res.json({ message: 'OrangeHire Backend is running successfully!', port: port });
});

app.listen(port, () => {
  console.log(`🍊 OrangeHire Backend listening on port ${port}`);
});