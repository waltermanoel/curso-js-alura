import mongoose from "mongoose";

mongoose.connect("mongodb+srv://waltermanoel:gta5@cluster0.5vcjipz.mongodb.net/dados-json");

let db = mongoose.connection;

export default db;