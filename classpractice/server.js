const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set("views", "views");
app.set("view engine", "ejs");

app.get("/playGame", handlePlayGame);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

function handlePlayGame(req, res) {
    console.log("playing game");

    const playerWeapon = req.query.playerWeapon;
    console.log("player weapon: " + playerWeapon);
    
    const cpuWeapon = "Scissors";
    const winner = "Player";

    const params = {playerWeapon: playerWeapon, cpuWeapon: cpuWeapon, winner: winner};
    console.log(params);
    res.render("results", params);
}

