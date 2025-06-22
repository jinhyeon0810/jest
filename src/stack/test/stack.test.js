const Stack = require("../stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allows push item", () => {
    stack.push("banana");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("throws an error when stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });

    it("returns the last pushed item and removes it from the stack", () => {
      stack.push("banana");
      stack.push("berry");

      expect(stack.pop()).toBe("berry");
      expect(stack.size()).toBe(1);
    });
  });

  describe("peek", () => {
    it("throws an error when stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });

    it("returns the last pushed item and removes it from the stack", () => {
      stack.push("banana");
      stack.push("berry");

      expect(stack.peek()).toBe("berry");
      expect(stack.size()).toBe(2);
    });
  });
});
