const { Server } = require("socket.io");
const cors = require("cors")
const express = require("express")
const io = new Server({
  cors: {
    origin: "*",
    methods: ['GET', 'POST']
  }
});
const app = express();
let userList = [];
let chats = [{ user: "God", chat: "Begin the chat, start typing !" }];

io.on("connection", (socket) => {

  console.log("new connection " + socket.id);

  socket.on("joinRoom", (x) => {
    // add user to userList whent they join room, emit a global signal to update chats and user list
    console.log(`${x.name} joined room`);
    userList.push({ name: x.name, socket: socket.id });
    io.emit("oldChats", [...chats]);
    io.emit("users", { users: userList });
  })
  socket.on("newChat", (x) => {
    // add a newChat into the chats list, emit a global signal to update chats
    chats.push({ user: x.user, chat: x.chat })
    io.emit("oldChats", [...chats])
  })
  socket.on("disconnect", (x) => {
    // upon disconnection updare userList by removing the user
    let search = userList.findIndex(x => x.socket == socket.id);
    io.emit("userLeft", userList[search]); // this event generates the user left message
    userList.splice(search, 1);
    io.emit("users", { users: userList })
    if (userList.length == 0) {
      chats = [];
    }
  })
})


io.listen(process.env.PORT || 8080);
