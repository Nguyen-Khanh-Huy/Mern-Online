import express from 'express';
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
server.listen(8001);

export const chatRouter = express.Router();

io.on("connection", socket => {
    console.log("User Conneted... " + socket.id);

    socket.on("disconnect", () => {
        console.log("User Disconnect: " + socket.id);
    })
    socket.on("client-send-mess", (data) => {
        console.log(socket.id +" Send "+ data);
        io.sockets.emit("server-send-mess", data);
    })
})