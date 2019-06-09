"use strict";

const express = require("express");

// Constants
const PORT = 8000;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.static("build"));

// Handle 404
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
