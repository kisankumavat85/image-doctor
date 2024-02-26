import mongoose, { type Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_NAME = process.env.MONGODB_NAME;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cashed: MongooseConnection = (global as any).Mongoose;

if (!cashed) {
  cashed = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDB = async () => {
  if (cashed.conn) return cashed.conn;

  if (!MONGODB_URL || !MONGODB_NAME) {
    throw new Error("MONGODB_URL and MONGODB_NAME are required!");
  }

  cashed.promise =
    cashed.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: MONGODB_NAME,
      bufferCommands: false,
    });

  cashed.conn = await cashed.promise;

  return cashed.conn;
};
