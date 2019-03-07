const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine","ejs");

app.get("/", () => {
    console.log("this is the root");
});
