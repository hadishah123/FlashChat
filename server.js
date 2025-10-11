const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

const players = {};

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join_game", ({ gameId, name }) => {
    socket.join(gameId);
    players[socket.id] = { name, gameId };
    console.log(`${name} joined ${gameId}`);
    io.to(gameId).emit("chat_message", {
      name: "System",
      message: `${name} joined the chat.`,
    });
  });

  socket.on("chat_message", ({ gameId, name, message }) => {
    io.to(gameId).emit("chat_message", { name, message });
  });

  socket.on("disconnect", () => {
    const player = players[socket.id];
    if (player) {
      io.to(player.gameId).emit("chat_message", {
        name: "System",
        message: `${player.name} left the chat.`,
      });
      delete players[socket.id];
    }
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));