import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { jest } from "@jest/globals";

jest.setTimeout(180000);

process.env.JWT_SECRET = process.env.JWT_SECRET || "testsecret";

let mongoServer;

beforeAll(async () => {
  if (process.env.MONGO_URI) {
    await mongoose.connect(process.env.MONGO_URI);
    return;
  }

  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  if (mongoose.connection.readyState === 1) await mongoose.disconnect();
  if (mongoServer) await mongoServer.stop();
});