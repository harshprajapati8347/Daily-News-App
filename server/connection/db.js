import mongoose from "mongoose";

const connection = async () => {
  try {
    const URL = process.env.MONGODB_URI;
    //   old mdb sting is deprecated , so informing mdb to use the new string instead

    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting the database",error);
  }
};

export default connection;
