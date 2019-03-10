const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine","ejs");

app.get("/", () => {
    console.log("this is the root");
});

app.get("/calculate", calculateRate);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

function calculateRate(req, res) {
    console.log("calculating package");

    var price = 0;

    const packagetype = req.query.packtype;
    const weight = Number(req.query.weight);

    if (packagetype == 'Stamped Letter') {
        console.log("Stamped Letter");
        price = calcStampedLetter(weight);
        if (price == 0) {
            price = "Invalid Weight";
        }
    } else if (packagetype == 'Metered Letter') {
        console.log("Metered Letter");
        price = calcMeteredLetter(weight);
        if (price == 0) {
            price = "Invalid Weight";
        }
    } else if (packagetype == "Flats-Large Envelope") {
        console.log("Large Envelope");
        price = calcLargeEnvelopes(weight);
        if (price == 0) {
            price = "Invalid Weight"
        }
    } else if (packagetype == "First-Class Package") {
        console.log("First Class");
        price = calcFirstClass(weight);
        if (price == 0) {
            price = "Invalid Weight"
        }
    }

    const params = {
        packagetype: packagetype,
        weight: weight,
        price: price
    };

    res.render("results", params);
};
function calcFirstClass(weight) {
    console.log("first class");
    var price = 0
    if (weight <= 4) {
        console.log("1 or less");
        return "$3.60";
    } else if (weight <= 5) {
        console.log("<= 5");
        return "$3.78";
    } else if (weight <= 6) {
        console.log("<= 6");
        return "$3.96";
    } else if (weight <= 7) {
        console.log("<= 7");
        return "$4.14";
    } else if (weight <= 8) {
        console.log("<= 8");
        return "$4.32";
    } else if (weight <= 9) {
        console.log("<= 9");
        return "$4.50";
    } else if (weight <= 10) {
        console.log("<= 10");
        return "$4.68";
    } else if (weight <= 11) {
        console.log("<= 11");
        return "$4.86";
    } else if (weight <= 12) {
        console.log("<= 12");
        return "$5.04";
    } else if (weight <= 13) {
        console.log("<= 13");
        return "$5.22";
    } else if (weight <= 16) {
        console.log("<= 16");
        return "$8.68";
    }else if (weight <= 32) {
        console.log("<= 32");
        return "$10.28";
    }
    return price;
}

function calcLargeEnvelopes(weight) {
    var price = 0
    if (weight <= 1) {
        console.log("1 or less");
        return "$1.00";
    } else if (weight <= 2) {
        console.log("between 1 and 2");
        return "$1.15";
    } else if (weight <= 3) {
        console.log("3 or less");
        return "$1.30";
    } else if (weight <= 4) {
        console.log("4 or less");
        return "$1.45";
    } else if (weight <= 5) {
        console.log("<= 5");
        return "$1.60";
    } else if (weight <= 6) {
        console.log("<= 6");
        return "$1.75";
    } else if (weight <= 7) {
        console.log("<= 7");
        return "$1.90";
    } else if (weight <= 8) {
        console.log("<= 8");
        return "$2.05";
    } else if (weight <= 9) {
        console.log("<= 9");
        return "$2.20";
    } else if (weight <= 10) {
        console.log("<= 10");
        return "$2.35";
    } else if (weight <= 11) {
        console.log("<= 11");
        return "$2.50";
    } else if (weight <= 12) {
        console.log("<= 12");
        return "$2.65";
    } else if (weight <= 13) {
        console.log("<= 13");
        return "$2.80";
    }
    return price;
}

function calcMeteredLetter(weight) {
    var price = 0
    if (weight <= 1) {
        console.log("1 or less");
        return "$0.50";
    } else if (weight <= 2) {
        console.log("between 1 and 2");
        return "$0.65";
    } else if (weight <= 3) {
        console.log("3 or less");
        return "$0.80";
    } else if (weight <= 3.5) {
        console.log("3.5 or less");
        return "$0.95";
    }
    return price;
}

function calcStampedLetter(weight) {
   var price = 0;
    if (weight <= 1) {
        console.log("1 or less");
        return "$0.55";
    } else if (weight <= 2) {
        console.log("between 1 and 2");
        return "$0.70";
    } else if (weight <= 3) {
        console.log("3 or less");
        return "$0.85";
    } else if (weight <= 3.5) {
        console.log("3.5 or less");
        return "$1.00";
    }
    return price;
}