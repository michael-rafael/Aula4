const http = require('http');
const express = require('express');
const applicacao = express();


const servidorHttp = http.createServer(applicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    console.log('Um usuario  conectou');
    // Aqui ele recebe a msg do socket e emit mais 1 event
    socket.addListener('nova mensagem', (msg) => {
        // aqui poderia verificar qual msg e tratar dados (testar isso depois)
        io.emit('nova mensagem', msg);
    })
})







applicacao.use(express.static('public'))



servidorHttp.listen(80)