import dotenv from "dotenv";
import { closeClient, getClient } from "./services/mongodb-service";

/**
 * Main function that serves as the entry point for the application.
 */
export const main = async () => {
  dotenv.config(); // Load environment variables from .env file

  try {
    // Connect to MongoDB
    console.log("Starting MongoDB connection test...");
    const mongoClient = await getClient();
    // Get the database and admin database
    const db = mongoClient.db();
    const dbAdmin = db.admin();
    // List all databases
    const databases = await dbAdmin.listDatabases();
    console.log("Successfully listed databases:", databases.databases.length);
  } catch (error) {
    console.error("Error in main function:", error);
    process.exit(1);
  }
};

// Close MongoDB connection on SIGINT
process.on("SIGINT", async () => {
  console.log("SIGINT signal received. Closing MongoDB connection...");
  await closeClient();
  process.exit(0);
});

main();
