/**
 * Environments variables declared here.
 */
export default {
  NodeEnv: process.env.NODE_ENV ?? "development",
  MongoDB: {
    ConnectionString:
      process.env.MONGODB_CONNECTION_STRING ??
      "mongodb://mongodb1:27017,mongodb2:27018,mongodb3:27019/?replicaSet=rs0",
  },
} as const;
