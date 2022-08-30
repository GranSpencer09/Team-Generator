const Intern = require("../lib/Intern");

const intern1 = new Intern(
  "Spencer",
  9,
  "spencer@spencer.com",
  "Monsters University"
);

test("Can we load a new Engineer", () => {
  expect(typeof intern1).toBe("object");
});
test("Does the right school load", () => {
  expect(intern1.school).toBe("Monsters University");
});
test("Does the right role load", () => {
  expect(intern1.role).toBe("Intern");
});
test("Does the right school get returned", () => {
  expect(intern1.getSchool()).toBe("Monsters University");
});
