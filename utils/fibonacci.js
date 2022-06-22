const getAllTickets = require("./getAllTickets");
const overwriteTickets = require("./overwriteTickets");

async function fibonacci(n, ticket) {
  const tickets = await getAllTickets();
  const result = tickets.findIndex((item) => item.ticket === ticket);
  console.log("result", result);

  let a = 0;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  console.log("b", b);

  console.log(tickets[result]);
  tickets[result] = {
    ticket: ticket,
    number: n,
    Fibonacci: b,
  };
  await overwriteTickets(tickets);
}

module.exports = fibonacci;
