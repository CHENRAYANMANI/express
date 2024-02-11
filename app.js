const express = require("express");

const server = express();

const port = 7000;
server.use(express.json());

const mongoose = require("mongoose");
const router = require("./router");
server.use("/", router);
mongoose
  .connect("mongodb+srv://chenrayan:che4068@cluster0.tjnimv7.mongodb.net/", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("database conncetd");
  })
  .catch((err) => console.log(err));

server.listen(port, () => {
  console.log(`You're server On Fire  http://localhost:${port}`);
});
