const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Company = new Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, required: true },
  imgAddress: { type: String, default: null },
  reviewScore: { type: Number, default: 3, required: true },
  realtimeScore: { type: Number, default: 0 },
});

module.exports = Company;
