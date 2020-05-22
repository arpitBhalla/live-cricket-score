
const Match=require("./Models/Match")
const API=require("./match.json")
const io=socket=>{
    console.log("New Connection")
    socket.emit("init",API)
    socket.on("bowled",(data)=>{
        API.team1.batting.players.arpitid.runs=i++
        socket.volatile.emit("play",API)
    })
}

module.exports=io