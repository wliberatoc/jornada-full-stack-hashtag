import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://wliberatoc:lenovo123@cluster0.jfhxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const cliente = new MongoClient(URI);

export const db = cliente.db("spotifyAula");
const songCollection = await db.collection("songs").find({}).toArray();

console.log(db);
