const mongoose = require('mongoose');

module.exports= mongoose.model('Match',new mongoose.Schema({
    "name": {
        "type": "string"
      },
      "flag": {
        "type": "string"
      },
      "players": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "_id": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "src": {
                "type": "string"
              },
              "mode": {
                "type": "array"
              }
            },
            "required": [
              "_id",
              "name",
              "src",
              "mode"
            ]
          }
        ]
      }
}))
