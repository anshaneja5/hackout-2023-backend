const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const linkRoutes = require("./routes/links");
app.use("/api/v1", linkRoutes);
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});
const dbConnect = require("./config/database");
dbConnect();
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE baby</h1>`);
});
