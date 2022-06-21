const express = require("express");
const cors = require("cors");

const ticketRouter = require("./routers/ticket");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", ticketRouter);

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = err.message } = err;
  res.status(status).json({
    status: "error",
    code: status,
    message,
  });
});

module.exports = app;
