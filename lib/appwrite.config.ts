import * as sdk from "node-appwrite";

// Load environment variables
export const ENDPOINT = process.env.APPWRITE_ENDPOINT;
export const PROJECT_ID = process.env.PROJECT_ID;
export const API_KEY = process.env.API_KEY;
export const DATABASE_ID = process.env.DATABASE_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;
export const PATIENT_COLLECTION_ID = process.env.PATIENT_COLLECTION_ID;

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

console.log("BUCKET_ID:", BUCKET_ID);
