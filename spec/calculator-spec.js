
var calculator = require("../lib/calculator");

describe("multiplication", function () {
  it("should multiply 2 and 3", function () {
    var product = calculator.multiply(2, 3);
    expect(product).toBe(6);
  });
});

describe("multiplication", function () {
  it("should multiply 5 and 3", function () {
    var product = calculator.multiply(5, 3);
    expect(product).toBe(15);
  });
});
