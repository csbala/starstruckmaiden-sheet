// __tests__/setupTests.js
// Add any global test setup here
global.console = {
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
