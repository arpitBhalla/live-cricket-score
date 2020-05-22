const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose=require("mongoose")
const http = require('http').createServer(app);
const io = require('socket.io')(http);


const Router=require("./routes/route")
app.use(bodyParser.json());
app.use(Router);

// app.use(express.static(__dirname + '/public'));
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, 
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};
const uri='mongodb://localhost/match'
mongoose.connect(uri, options)

const SocketAPI=require("./Socket")
io.on("connection",SocketAPI)

const port = process.env.PORT || 5000;
http.listen(port, () => {
    console.log('listening on *:' + port);
});

