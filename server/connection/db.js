import mongoose from "mongoose";

const connection = async () => {
  try {
    const URL = `mongodb://shortnews01:janproject@shortnews-shard-00-00.kpwv9.mongodb.net:27017,shortnews-shard-00-01.kpwv9.mongodb.net:27017,shortnews-shard-00-02.kpwv9.mongodb.net:27017/SHORTNEWS?ssl=true&replicaSet=atlas-t853ep-shard-0&authSource=admin&retryWrites=true&w=majority`;
    //   old mdb sting is deprecated , so informing mdb to use the new string instead

    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting the database",error);
  }
};

export default connection;
