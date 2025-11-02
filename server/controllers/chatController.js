// controllers/chatController.js
const { users, messages } = require('../socket');

exports.getMessages = (req, res) => {
  res.json(messages);
};

exports.getUsers = (req, res) => {
  res.json(Object.values(users));
};
