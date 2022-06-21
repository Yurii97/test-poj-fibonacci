const fs = require("fs/promises");
const { getAllTickets } = require("../utils");

const getTicket = async (req, res) => {
  const { ticket } = req.body;
  console.log(ticket);
  const tickets = await getAllTickets();
  const result = tickets.find((item) => item.ticket === ticket);
  if (!result) {
    res.status(404).json({
      status: "error",
      code: 404,
      mesage: `not found`,
    });
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: { Fibonacci: String(result.Fibonacci) },
    },
  });
};

module.exports = getTicket;
