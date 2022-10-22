import mongoose from "mongoose";

mongoose.connect("mongodb+srv://RuhamLeal:Ruhamxl123@cluster0.nsioato.mongodb.net/curso-alura");

const db = mongoose.connection;

export default db;
