var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

let API=require("./match.json")
// app.use(express.static(__dirname + '/public'));
app.get('/api/v1', (req, res) => {
    res.sendFile(__dirname+"/match.json")
});

const port = process.env.PORT || 5000;
http.listen(port, () => {
    console.log('listening on *:' + port);
});
let i=0
API.matchName="DSF"
io.on("connection",(socket)=>{
    console.log("New Connection "+ ++i)

    socket.emit("init",API)
    socket.on("bowled",(data)=>{
        API.team1.batting.players.arpitid.runs=i++
        socket.volatile.emit("play",API)
    })
})