const express = require("express");
const questions = require("./questions.json");

const app = express();
const PORT = 8000;

app.get("/questions", (req, res) => {
    return res.json(questions);
});

app.route("/api/questions/:id").get((req, res) => {
    const id = Number(req.params.id);
});

app.listen(PORT, () => console.log(`ERVER STARTED AT PORT: ${8000}`));