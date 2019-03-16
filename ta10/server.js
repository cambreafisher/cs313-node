const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectionString = process.env.DATABASE_URL || "postgres://tvfksgsoaswwie:80bbe5bcdf3fb8c0260f3f155124b7d7b3ccc443092d1ca9e9c377b1698ff4b7@ec2-75-101-131-79.compute-1.amazonaws.com:5432/dbdg0688chiah2?ssl=true";
const { Pool } = require('pg');
const pool = new Pool({connectionString: connectionString});

app.use(express.static("public"));

app.set("views", "views");
app.set("views engine", "ejs");

app.listen(port, function() {
    console.log("Port: " + port);
});



app.get("/getPerson", (req, response) => {
    const id = req.query.id;

    pool.query('SELECT * FROM Person WHERE person_id = $1', [id], (err, result) => {
        if (err) {
          throw err
        } else {
            const person = result[0];
            response.status(200).json(person);
        }
       
        console.log('person:', result.rows[0]);
    });
});