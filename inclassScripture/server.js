//connect with express
const express = require("express");
const app = express();

//
const port = process.env.PORT || 5000;

//require the controller file - connect
const controller = require("./controllers/scriptureController.js")

//set up public directory
app.use(express.static('public'));

//handle the endpoints
app.get('/scriptures', controller.getAllScriptures);

//
app.listen(port, () => {
    console.log(`listening on ${port}`);
})
