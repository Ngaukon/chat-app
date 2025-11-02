// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    sender: { type: String, required: true },
    senderId: { type: String, required: true },
    receiverId: { type: String, default: null }, // null = public chat
    message: { type: String, required: true },
    isPrivate: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);