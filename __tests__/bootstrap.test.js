// __tests__/bootstrap.test.js
describe("StarstruckMaiden Sheet Module", () => {
  test("should log initialization message", () => {
    // Mock Foundry Hooks
    const hooks = {
      once: jest.fn((event, callback) => {
        if (event === "init") callback();
      }),
    };
    global.Hooks = hooks;

    // Load the module
    require("../src/bootstrap.js");

    // Check if console.log was called with the correct message
    expect(console.log).toHaveBeenCalledWith(
      "StarstruckMaiden Sheet | Module initialized"
    );
  });
});
