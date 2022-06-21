const fs = require("fs/promises");
const ticketsPath = require("./ticketsPath");

const getAllTickets = async () => {
  const data = await fs.readFile(ticketsPath);
  const tickets = JSON.parse(data);
  return tickets;
};

module.exports = getAllTickets;
