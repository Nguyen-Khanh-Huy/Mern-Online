import express from 'express';
// import messageController from './message.controller';
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
server.listen(8001);
export const chatRouter = express.Router();

io.on('connection', socket => {
    console.log('user conneted');
    socket.on('sendmess', (mess) => {
        console.log(mess)
    })
})