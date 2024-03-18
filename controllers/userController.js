const User = require("../models/userModel");

const userController = {
  // Obtener todos los usuarios
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Obtener usuarios por Id
  getUserById: async (req, res) => {
    const id = req.params.id;
    try {
      const userId = await User.findById(id);
      res.json(userId);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Obtener usuarios por nombre
  getUserName: async (req, res) => {
    const name = req.params.name;
    try {
      const userName = await User.findOne({ nombres: name });
      res.json(userName);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Crear un nuevo usuario
  createUser: async (req, res) => {
    const userData = req.body;
    try {
      const newUser = new User(userData);
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Actualizar

  updateUser: async (req, res) => {
    try {

    const {nombres} = req.params

    const userUpdate = await User.findOneAndUpdate({name: nombres}, {$set: {name: 'Pedro'}});
    res.json(userUpdate)
    
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

 // Eliminar
  deleteUser: async (req, res) => { 
    try {
      const {nombres} = req.params
      const userDelete = await User.findOneAndDelete({name: nombres});
      res.json(userDelete)
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
   },

};

module.exports = userController;
