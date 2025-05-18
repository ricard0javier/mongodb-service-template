import { jest } from "@jest/globals";
import { getClient } from "../services/mongodb-service";

// Mock the MongoDB service
jest.mock("../services/mongodb-service", () => ({
  getClient: jest.fn(),
  closeClient: jest.fn(),
}));

// Mock console methods
const originalConsoleLog = console.log;
const originalConsoleError = console.error;
const originalProcessExit = process.exit;

describe("Main Function", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Mock console methods
    console.log = jest.fn();
    console.error = jest.fn();
    process.exit = jest.fn() as unknown as typeof process.exit;
  });

  afterEach(() => {
    // Restore console methods
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
    process.exit = originalProcessExit;
  });

  it("should successfully connect to MongoDB and list databases", async () => {
    // Mock successful MongoDB connection
    const mockDb = {
      db: jest.fn().mockReturnValue({
        admin: jest.fn().mockReturnValue({
          listDatabases: jest
            .fn()
            .mockResolvedValue({ databases: [{ name: "test" }] } as never),
        }),
      }),
    };
    (getClient as jest.Mock).mockResolvedValue(mockDb as never);

    // Import and run main function
    const { main } = require("../index");
    await main();

    // Verify that getClient was called
    expect(getClient).toHaveBeenCalled();

    // Verify that the success message was logged
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("Successfully listed databases:"),
      1
    );
  });

  it("should handle MongoDB connection errors", async () => {
    // Mock failed MongoDB connection
    const mockError = new Error("Connection failed");
    (getClient as jest.Mock).mockRejectedValue(mockError as never);

    // Import and run main function
    const { main } = require("../index");
    await main();

    // Verify that the error was logged
    expect(console.error).toHaveBeenCalledWith(
      "Error in main function:",
      mockError
    );
  });
});
