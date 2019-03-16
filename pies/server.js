const express = require("express");
const app = express();

//PieController
//const controller = require("./controller/pieController.js");

const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/pieTypes', getPieTypes);

//app.get("/pie/:id, controller.handleGetPie);
app.get("/pie/:id", getPie);

app.post('/pie', createPie);

app.listen(port, () => {
    console.log("Server listening on: " + port);

});
/********PieController*/
//
function createPie(req, res) {
    //for post you can make a form
    console.log("creating a pie");
    //for form data
    const type = req.body.type;
    const quantity = req.body.quantity;
    const calorie = req.body.calorie;

    console.log(`type :${type}, quantity:${quantity}`);

    const result = {id: 3, type:type};

    res.json(result);
}

function getPieTypes(req, res) {
    const pieResults = [
        {id: 12, type: "peach"},
        {id: 342, type: "cherry"},
        {id: 4, type: "pecan"},
        {id: 6, type: "pizza"}
    ];
    res.json(pieResults);
}

function getPie(req, res) {
    //const id = req.query.id;
    const id = req.params.id;
    console.log("request for specific pie with id: " + id);
}
//in the separate file, which functions do you want public
/*
//module.exports = {
createPie: createPie,
handleGetPie: getPie,
getPieTypes: getPieTypes
};
*/