const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const uri =
  "mongodb+srv://Solsun:Solsun123@solsuncluster.ncfhd2k.mongodb.net/solsunDB?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function start() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Error:", err.message);
  }
}

start();

app.listen(5000, () => {
  console.log("✅ Server running on 5000");
});
