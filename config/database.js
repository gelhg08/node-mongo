const mongoose = require("mongoose");
let User;

const connectDatabase = async () => {
  try {
    if (!User) {
      User = mongoose.model("User", require("../models/userModel").schema);
    }

    await mongoose
      .connect("mongodb+srv://angelicamhg31:IevENUAk6CTWodsi@mongodb3.wvf0uet.mongodb.net/")
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.log(err));

    await initializeData();
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

const initializeData = async () => {
  try {
    await User.deleteMany();

    const usersData = [
      {
        nombres: "Angelica",
        apellidos: "Hernandez",
        correo: "angelica@example.com",
        ciudad: "Medellin",
        pais: "Colombia",
        salario: 2800,
        edad: 18,
        altura: 165,
        peso: 160,
      },
      {
        nombres: "Juan",
        apellidos: "Montoya",
        correo: "juan@example.com",
        ciudad: "Guadalajara",
        pais: "Mexico",
        salario: 3000,
        edad: 28,
        altura: 180,
        peso: 160,
      },
    ];

    await User.insertMany(usersData);
    console.log("Data successfully initialized");
  } catch (error) {
    console.error("Data initialization error:", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
