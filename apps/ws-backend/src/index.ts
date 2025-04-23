import { WebSocketServer } from "ws";
import { Client } from "@repo/db/client";

const server = new WebSocketServer({ port: 8082 });

server.on("connection", async (socket) => {
  await Client.users.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  socket.send("Hii there u r connetcted");
});
