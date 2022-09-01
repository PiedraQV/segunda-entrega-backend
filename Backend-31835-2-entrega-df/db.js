const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://User:12345@cluster0.j9v3p2d.mongodb.net/test");

mongoose.connection.on("open", () => {
  console.log("Conectado a mongodb");
});

mongoose.connection.on("error", () => {
  console.log("Error de conexión");
});