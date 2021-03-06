const { getAllTickets, overwriteTickets, fibonacci } = require("../utils");

const addTicket = async (req, res) => {
  const { number } = req.body;
  const tickets = await getAllTickets();
  const newTicket = {
    ticket: String(tickets.length + 1),
  };

  tickets.push(newTicket);
  await overwriteTickets(tickets);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: { ticket: newTicket.ticket },
    },
  });
  fibonacci(number, newTicket.ticket);
};

module.exports = addTicket;
