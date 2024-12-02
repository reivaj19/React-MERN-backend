const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Online");
  } catch (error) {
    console.error("Error de conexión a la base de datos:", error.message);
    throw new Error("Error a la hora de inicializar DB", error.message);
  }
};

module.exports = {
  dbConnection
};
