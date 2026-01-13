const mongoose = require("mongoose");

// Your connection string
const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = async () => {
  try {
    // No callback here anymore!
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully");
  } catch (error) {
    console.error("Failed to connect to Mongo", error);
  }
};

module.exports = connectToMongo;
