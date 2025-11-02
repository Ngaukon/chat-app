# 💬 Real-Time Chat App (MERN + Socket.io + Tailwind)

A modern real-time chat application built with **MongoDB**, **Express**, **React**, **Node.js**, and **Socket.io**, featuring a **dark, responsive UI** styled with **Tailwind CSS**.  
Messages and user activity are synchronized through **WebSockets**, with data persistence in MongoDB.

---

## 🚀 Project Overview

This project demonstrates a **real-time chat platform** that allows users to:
- Join using a username
- Send and receive messages instantly
- Switch between rooms
- See who is online
- View timestamps from the database
- Persist message history (via MongoDB)
- Experience a clean, modern chat UI

The architecture leverages **Socket.io** for bidirectional communication and **Mongoose** for database models.  
Both client and server communicate seamlessly to deliver a smooth chatting experience similar to Discord or Slack.

---

## 🖥️ Screenshots

### 🏠 Join Page
![Join Page](./screenshots/chat1.png)

### 💬 Chat Interface
![Chat Interface](./screenshots/chat2.png)

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React, Vite, Tailwind CSS |
| **Backend** | Node.js, Express |
| **Realtime** | Socket.io |
| **Database** | MongoDB + Mongoose |
| **Styling** | Tailwind CSS |
| **State Mgmt** | React hooks & custom Socket context |

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/realtime-chat-app.git
cd realtime-chat-app
````

---

### 2. Install dependencies

Install both client and server dependencies.

```bash
# Backend setup
cd server
npm install

# Frontend setup
cd ../client
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in your `/server` directory with the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatapp
CLIENT_URL=http://localhost:5173
```

Make sure MongoDB is running locally, or replace `MONGO_URI` with your Atlas connection string.

---

### 4. Run the application

#### Start the backend (Express + Socket.io)

```bash
cd server
npm run dev
```

#### Start the frontend (React + Vite)

```bash
cd client
npm run dev
```

Then visit 👉 **[http://localhost:5173](http://localhost:5173)**

---

## ✨ Features Implemented

### 🧠 Core Features

* **Real-time messaging** via Socket.io
* **Online/offline detection** synced with MongoDB
* **Persistent chat history** (messages stored in DB)
* **Automatic timestamps** for every message
* **System messages** (user join/leave notifications)

### 💬 Chat Functionality

* Join using a custom username
* Send and receive messages in real-time
* Switch chat rooms dynamically
* Typing indicators for active users
* Responsive message list with autoscroll

### 🎨 UI/UX Enhancements

* **Dark theme** with Tailwind CSS
* **Message bubbles** with timestamps
* **Online users sidebar** with status indicators
* **Floating input bar** with animated send button
* **Responsive layout** for desktop and mobile

---

## 🧩 Folder Structure

```
root/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBox.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── TypingIndicator.jsx
│   │   │   └── UserList.jsx
│   │   ├── pages/
│   │   │   └── ChatPage.jsx
│   │   ├── socket/
│   │   │   └── socket.js
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
│
└── server/
    ├── models/
    │   ├── User.js
    │   └── Message.js
    ├── socket/
    │   └── index.js
    ├── utils/
    │   └── logger.js
    ├── server.js
    ├── .env
    └── package.json
```

---

## 🧠 Future Enhancements

* [ ] Private DM support
* [ ] Chat rooms management UI
* [ ] Message deletion/edit
* [ ] File/image upload
* [ ] Authentication (JWT + user sessions)

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Joseph Ngaukon**
📧 [My Mail](mailto:josephlucia100@gmail..com)
🌐 [Portfolio or GitHub Profile](https://github.com/Ngaukon)

```
