const express = require('express');

const path = require("path");
const routes = require("./routes/ReviewRoute");
const mongoose = require("mongoose");
require("dotenv").config()


const cors = require("cors");

const app = express()
const PORT = process.env.PORT | 8080;

app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.use(express.urlencoded({ extended: false }));


mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log(err));


app.listen(PORT, () => console.log(`listen at ${PORT}`));

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});