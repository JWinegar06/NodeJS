const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (require, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log(`Test server running on port: ${PORT}`);
});