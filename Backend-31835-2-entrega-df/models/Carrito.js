const { Schema, model } = require("mongoose");
const carritoSchema = new Schema({
  timestamp: {
    type: Number,
    required: true,
  },
  productos: {
    type: String,
  },
});

module.exports = model("Cart", carritoSchema);