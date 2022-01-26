import mongoose from "mongoose";

// data validation is important, as if data (in our case array) is valid/correct or not.  MVC STRUCTURE

const newsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
});

const news = mongoose.model("news", newsSchema);

export default news;
