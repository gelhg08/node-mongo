const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  correo: String,
  ciudad: String,
  pais: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
