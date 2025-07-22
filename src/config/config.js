import "dotenv/config";

const config = {
  PORT: process.env.PORT || 3001,
  TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
  TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
};

export default config;
