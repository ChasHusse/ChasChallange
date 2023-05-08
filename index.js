const express = require("express");

const exphbs = require("express-handlebars");
const { MongoClient, ObjectId } = require("mongodb")

const app = express();


app.listen(8000, () => {
    console.log("http://localhost:8000")
});