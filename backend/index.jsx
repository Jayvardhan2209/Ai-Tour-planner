const connectToMongo = require("./database.jsx");
const express = require("express");
const cors = require("cors");
connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/tourroute", require("./Routes/tourroute.jsx"));

app.listen(port, () => {
  console.log(`AI Tour Planner backend listening on port ${port}`);
});