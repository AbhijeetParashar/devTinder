const express = require("express");

const app = express();
app.use((req, res, next) => {
  res.send("Hello Abhijeet from the server");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
