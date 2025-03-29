const express = require("express");
const { adminAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);

app.get("/admin/profile", (req, res) => {
  res.send("Admin Profile");
});

app.delete("/admin/profile", (req, res) => {
  res.send("Admin Profile deleted");
});

app.listen(7777, () => {
  console.log("Server started on port 7777");
});
