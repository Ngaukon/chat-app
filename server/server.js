// server.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const config = require('./config/config');
const { log } = require('./utils/logger');
const { socketHandler } = require('./socket');
const { getMessages, getUsers } = require('./controllers/chatController');

// Initialize Express
const app = express();
app.use(cors({ origin: config.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect MongoDB
connectDB(process.env.MONGO_URI);

// Routes
app.get('/api/messages', getMessages);
app.get('/api/users', getUsers);
app.get('/', (req, res) => res.send('Socket.io Chat Server with MongoDB is running'));

// Create HTTP and Socket.IO servers
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: config.CLIENT_URL, methods: ['GET', 'POST'], credentials: true },
});

// Initialize Socket.io logic
socketHandler(io);

// Start server
server.listen(config.PORT, () => {
  log(`🚀 Server running on port ${config.PORT}`, 'success');
});

module.exports = { app, server, io };