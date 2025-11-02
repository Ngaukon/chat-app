// config/db.js
const mongoose = require('mongoose');
const { log } = require('../utils/logger');

const connectDB = async (MONGO_URI) => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log(`🗄️ MongoDB Connected: ${conn.connection.host}`, 'success');
  } catch (error) {
    log(`❌ MongoDB Connection Error: ${error.message}`, 'error');
    process.exit(1);
  }
};

module.exports = connectDB;