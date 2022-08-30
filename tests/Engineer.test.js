const Engineer = require("../lib/Engineer");

const engineer1 = new Engineer(
  "Spencer",
  9,
  "spencer@spencer.com",
  "granspencer09"
);

test("Can we load a new Engineer", () => {
  expect(typeof engineer1).toBe("object");
});
test("Does the right role load", () => {
  expect(engineer1.role).toBe("Engineer");
});
test("Does the right Github username load", () => {
  expect(engineer1.github).toBe("granspencer09");
});
test("Does the right Github username get returned", () => {
  expect(engineer1.getGithub()).toBe("granspencer09");
});
