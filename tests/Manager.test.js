const Manager = require("../lib/Manager");

const manager1 = new Manager("Spencer", 9, "spencer@spencer.com", 7);

test("Can we load a new Manager", () => {
  expect(typeof manager1).toBe("object");
});
test("Does the right role school", () => {
  expect(manager1.officeNumber).toBe(7);
});
test("Does the right role load", () => {
  expect(manager1.role).toBe("Manager");
});
