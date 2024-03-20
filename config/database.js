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
        userId : 1,
        nombres: "Angelica",
        correo: "angelica@example.com",
        contraseña: '123'
      },
      {
        userId : 2,
        nombres: "Juan",
        correo: "juan@example.com",
        contraseña: '456'
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
