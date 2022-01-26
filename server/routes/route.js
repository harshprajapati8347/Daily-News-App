import express from "express";
import { getNews } from "../controller/newsControl.js";

const route = express.Router(); 

// accepts 3 argumets route,middleware,callback
route.get("/news",getNews)

export default route;


