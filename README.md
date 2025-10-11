# ⚡ FlashChat — Real-Time Temporary Chat Rooms

FlashChat is a lightweight, real-time chat web app where users can **instantly connect and chat** in a **temporary room** using a simple Room ID.  
No sign-up, no history — just quick, private conversations that disappear when you leave.

---

## 🚀 Features

- 💬 **Real-time messaging** with Socket.IO  
- 🧑‍🤝‍🧑 **Join by Room ID** — connect with friends instantly  
- 🎨 **Modern UI** using Tailwind CSS  
- 🌙 **Dark/Light mode toggle** with persistent theme  
- 🔔 **Notification sound** for new messages  
- ⚡ **Fast & private** — messages vanish when the room closes  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | HTML, Tailwind CSS, JavaScript |
| **Backend** | Node.js, Express.js |
| **Real-time** | Socket.IO |
| **Hosting (optional)** | Render / Vercel / Firebase Hosting |

---
## 📁 Project Structure
```
flashChat/
│
├── server.js # Express + Socket.IO backend
└── public/
└── index.html # Frontend UI
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone this repository

```bash
git clone https://github.com/hadishah123/flashchat.git
cd flashchat
```

### 2️⃣ Install dependencies
```bash
npm install express socket.io
```
### 3️⃣ Run the server
```bash
node server.js
```
### 4️⃣ Open your browser
```bash 
➡️ http://localhost:3000
```
## 💡 How It Works

- Enter your name and a Room ID (can be any number or word).
- Share the Room ID with a friend.
- Both join the same ID — start chatting instantly!
- Messages stay only while the room is active.
- if you refresh the page, its gone....

---

## 🧠 Future Enhancements (Optional Ideas)

- 🔐 End-to-end encryption  
- 🪄 Typing indicators (“User is typing...”)
- 👥 Active user list per room  
- 💾 Persistent rooms using a database (Firebase / MongoDB)  
- 📱 Mobile-optimized layout

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you’d like to change.

---

## 🪪 License

MIT License © 2025 [Hadi Shah](https://github.com/hadishah123)