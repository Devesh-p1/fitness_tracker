const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Schema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
      },
});

const dataBase = mongoose.model("", Schema);

module.exports = dataBase;