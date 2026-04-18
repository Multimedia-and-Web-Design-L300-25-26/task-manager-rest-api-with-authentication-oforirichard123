export default {
  testEnvironment: "node",
  // run our global setup/teardown helpers for MongoDB memory server
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"]
};