const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {

});

app.listen(PORT, console.log(`Listening on ${PORT}`));
