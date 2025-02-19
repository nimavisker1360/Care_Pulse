import * as sdk from "node-appwrite";

// Load environment variables
const ENDPOINT = process.env.APPWRITE_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;
const API_KEY = process.env.API_KEY;

if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
  throw new Error("Missing Appwrite environment variables.");
}

// Initialize Appwrite client
const client = new sdk.Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
