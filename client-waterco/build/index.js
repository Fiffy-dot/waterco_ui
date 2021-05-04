const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.use(express.json());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app is ruining on port ${port}`);
});