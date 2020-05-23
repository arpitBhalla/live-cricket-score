const mongoose=require("mongoose")

module.exports=mongoose.model("Team",new mongoose.Schema({
    name: { type: String, required: true },
    flag: { type: String, required: true },
    player: { type: Array, required: true},
}))