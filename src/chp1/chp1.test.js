const { statement } = require("./chp1");
const plays = require("./plays.json");
const invoices = require("./invoices.json");

describe("Test", () => {
  it("produces a default invoice", () => {
    expect(statement(invoices[0], plays)).toBe(`Statement for BigCo
 Hamlet: 650 (55 seats)
 As You Like It: 580 (35 seats)
 Othello: 500 (40 seats)
Amount owed is 1730
You earned 47 credits
`);
  });
});
