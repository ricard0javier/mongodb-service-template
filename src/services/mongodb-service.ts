import { MongoClient, ServerApiVersion } from "mongodb";
import config from "../common/config";

let client: MongoClient | null = null;

export const getClient = async (): Promise<MongoClient> => {
  if (!client) {
    console.log(
      "Attempting to connect to MongoDB with connection string:",
      config.MongoDB.ConnectionString
    );
    try {
      client = new MongoClient(config.MongoDB.ConnectionString, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
        // Connection pool settings
        maxPoolSize: 100, // Maximum number of connections in the pool
        minPoolSize: 10, // Minimum number of connections in the pool
        maxIdleTimeMS: 60000, // How long a connection can remain idle before being removed

        // Socket settings
        socketTimeoutMS: 45000, // How long to wait for operations to complete
        connectTimeoutMS: 10000, // How long to wait for initial connection

        // Keep-alive settings
        heartbeatFrequencyMS: 300000, // 5 minutes

        // Write concern settings
        // Write concern options:
        // 1 - Wait for write to be acknowledged by the primary only
        // 0 - No acknowledgment of write operations
        // "majority" - Wait for write to be acknowledged by majority of nodes
        // <number> - Wait for write to be acknowledged by specified number of nodes
        // <tag set> - Wait for write to be acknowledged by nodes matching the tag set
        w: "majority",
        wtimeoutMS: 2500, // How long to wait for write concern to be satisfied

        // Read preference settings
        readPreference: "secondaryPreferred", // Read from secondary if available, fall back to primary
      });

      await client.connect();
      console.log("Successfully connected to MongoDB!");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
      throw error;
    }
  }
  return client;
};

export const closeClient = async (): Promise<void> => {
  if (client) {
    await client.close();
    client = null;
    console.log("Database connection closed.");
  }
};

export default {
  getClient,
  closeClient,
};
