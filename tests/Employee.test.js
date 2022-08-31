const Employee = require("../lib/Employee");

const employee1 = new Employee("Spencer", 9, "spencer@spencer.com");

test("Can we load a new employee object", () => {
  expect(typeof employee1).toBe("object");
});
test("Does the right name load", () => {
  expect(employee1.name).toBe("Spencer");
});
test("Does the right id load", () => {
  expect(employee1.id).toBe(9);
});
test("Does the right email load", () => {
  expect(employee1.email).toBe("spencer@spencer.com");
});
test("Does the right role load", () => {
  expect(employee1.role).toBe("Employee");
});
test("Does the right name get returned", () => {
  expect(employee1.getName()).toBe("Spencer");
});
test("Does the right ID get returned", () => {
  expect(employee1.getId()).toBe(9);
});
test("Does the right email get returned", () => {
  expect(employee1.getEmail()).toBe("spencer@spencer.com");
});
test("Does the right role get returned", () => {
  expect(employee1.getRole()).toBe("Employee");
});
