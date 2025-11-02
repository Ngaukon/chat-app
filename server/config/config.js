// config/config.js
const dotenv = require('dotenv');
dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
};

module.exports = config;
