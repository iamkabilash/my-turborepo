import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.json({ status: "healthy server" });
});

app.listen(8000);
