// server/socket/index.js
const User = require("../models/User");
const Message = require("../models/Message");
const { log } = require("../utils/logger");

exports.socketHandler = (io) => {
  io.on("connection", (socket) => {
    log(`🟢 User connected: ${socket.id}`, "info");

    // Track current room for this socket
    socket.currentRoom = "General";

    // 🧩 Handle user joining
    socket.on("user_join", async (username) => {
      let user = await User.findOne({ username });
      if (!user) {
        user = await User.create({
          username,
          socketId: socket.id,
          online: true,
          room: "General",
        });
      } else {
        user.socketId = socket.id;
        user.online = true;
        user.room = "General";
        await user.save();
      }

      socket.join("General"); // Default room

      // 🗨️ Notify room that the user joined
      io.to("General").emit("receive_message", {
        sender: "System",
        message: `${username} joined General.`,
        timestamp: new Date(),
      });

      // 🧍 Update all online users
      io.emit("user_list", await User.find({ online: true }));

      // 🖐️ Welcome message
      socket.emit("receive_message", {
        sender: "System",
        message: `Welcome ${username}!`,
        timestamp: new Date(),
      });
    });

    // 🔄 Handle room switching
    socket.on("join_room", async ({ username, room }) => {
      const user = await User.findOne({ username });
      if (!user) return;

      // Leave previous room
      if (socket.currentRoom) {
        socket.leave(socket.currentRoom);
        io.to(socket.currentRoom).emit("receive_message", {
          sender: "System",
          message: `${username} left ${socket.currentRoom}.`,
          timestamp: new Date(),
        });
      }

      // Join the new room
      socket.join(room);
      socket.currentRoom = room;
      user.room = room;
      await user.save();

      io.to(room).emit("receive_message", {
        sender: "System",
        message: `${username} joined ${room}.`,
        timestamp: new Date(),
      });
    });

    // 💬 Handle sending messages
    socket.on("send_message", async (data) => {
      const user = await User.findOne({ socketId: socket.id });
      if (!user) return;

      // 🧠 Extract clean message text
      const messageText =
        typeof data === "string"
          ? data
          : data.message?.text || data.message || data.text || "";

      if (!messageText.trim()) return; // Ignore empty messages

      // 🧾 Save message to DB
      const message = await Message.create({
        sender: user.username,
        senderId: user._id.toString(), // ✅ Ensure it's a string
        message: messageText,          // ✅ Ensure it's a string
        room: user.room || "General",
        timestamp: new Date(),
      });

      // 📡 Emit message to the user's room
      io.to(user.room || "General").emit("receive_message", message);
    });

    // ❌ Handle disconnections
    socket.on("disconnect", async () => {
      const user = await User.findOne({ socketId: socket.id });
      if (user) {
        user.online = false;
        await user.save();

        // Update user list for all
        io.emit("user_list", await User.find({ online: true }));

        // Notify others
        io.to(user.room || "General").emit("receive_message", {
          sender: "System",
          message: `${user.username} went offline.`,
          timestamp: new Date(),
        });
      }

      log(`🔴 User disconnected: ${socket.id}`, "warn");
    });
  });
};