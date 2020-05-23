const mongoose = require('mongoose');

module.exports= mongoose.model('Player',new mongoose.Schema({
    name: { type: String, required: true },
    src: { type: String, required: true },
    mode: { type: Array, required: true },
}))
