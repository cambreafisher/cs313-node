const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", () => {
    console.log("this is the root");
});
app.get("/math", (req, res) => {
    console.log("handling math");
    var num1 = Number(req.query.num1);
    var num2 = Number(req.query.num2);
    var operand = req.query.operand;
    console.log(num1);
    console.log(num2);
    console.log(operand);

    var result = 0;

    if (operand == "add") {
        result = num1 + num2;
    } else if (operand == "subtract") {
        result = num1 - num2;
    } else if (operand == "multiply") {
        result = num1 * num2;
    } else if (operand == "divide") {
        result = num1 / num2;
    }
    console.log(result);
    const params = {result: result, num1: num1, num2: num2, operand: operand};
    res.render("result", params);
});

app.listen(5000, () => {
    console.log("listening...");
});
