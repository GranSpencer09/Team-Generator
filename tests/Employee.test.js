const Employee = require("../lib/Employee");

const employee1 = new Employee("Spencer", 9, "spencer@spencer.com");
test("Can we load a new employee", () => {
  expect(typeof employee1).toBe("object");
});
test("Does the right name show up", () => {
  expect(employee1.name).toBe("Spencer");
});
