// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Eber:ND1AemhwPd3Je2Mn@cluster0.cs6zb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("replicaSpotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
