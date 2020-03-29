const TodoContext = require("./TodoContext");

test("Adds 4 - 4 to equal 0", () => {
  expect(TodoContext.sub(4, 4)).toBe(0);
});
