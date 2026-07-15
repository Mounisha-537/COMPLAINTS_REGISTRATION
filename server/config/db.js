const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Full database error:");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectToDB;