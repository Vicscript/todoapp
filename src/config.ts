import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8085;

export const MONGODB_URL = process.env.MONGODB_URL;

export const config = {
  server: {
    port: PORT,
  },
};
