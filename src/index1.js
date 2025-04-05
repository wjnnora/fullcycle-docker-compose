const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello FullCycle Nora!</h1>");
});

app.listen(port, (req, res) => {
    console.log(`Server is running at http://localhost:${port}`);
});
