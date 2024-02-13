const express = require ('express');
const http = require ('http');
const socketIO = require ('socket.io');
const mysql = require('mysql');


const app = express();
const server = http.createServer(app);


const io = socketIO(server);

const db = mysql.createPool ({
    host: 'root@localhost',
    user: '3306',
    password: 'NokwandaRose',
    database: 'status'
});

io.on ('connection', (socket) => {
     
    console.log ('a user has connected...');

    socket.on ('disconnect', () => {
        console.log ('user has been disconnected');
    });

    socket.on ('chat message', (message) => {
        console.log ('Message from user, ${message}');

        io.emit ('chat message', message);
    });
});


const PORT = process.env.PORT || 3306;
    server.listen(PORT, () => {
        console.log ('Server is running on http://localhost:${PORT}');
    });

