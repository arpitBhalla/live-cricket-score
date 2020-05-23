const mongoose = require('mongoose');

module.exports= mongoose.model('Match',new mongoose.Schema({
    matchTime: { type: String, required: true },
    matchName: { type: String, required: true },
    matchVenue: { type: String, required: true },
    matchOver: { type: String, required: true },
    matchResult: { type: String, required: true },
    team1: { type: Object, required: true, },
    team2: { type: Object, required: true, },
}))