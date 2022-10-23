import mongoose from "mongoose";

mongoose.connect("mongodb+srv://user:password@cluster0.nsioato.mongodb.net/curso-alura");

const db = mongoose.connection;

export default db;
