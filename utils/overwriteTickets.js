const fs = require("fs/promises");
const ticketsPath = require("./ticketsPath");

const overwriteTickets = async (tickets) => {
  await fs.writeFile(ticketsPath, JSON.stringify(tickets));
};

module.exports = overwriteTickets;
