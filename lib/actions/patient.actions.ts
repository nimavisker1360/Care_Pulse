'use server'

import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log({ newUser });

    return parseStringify(newUser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
    console.log("Appwrite Endpoint:", process.env.APPWRITE_ENDPOINT);
    console.log("Project ID:", process.env.PROJECT_ID);
    console.log("API Key:", process.env.API_KEY ? "Present" : "Missing");
  }
};
export const getUser = async(userId:string)=>{
  try {
    const user = await users.get(userId)

    return parseStringify(user)
    
  } catch (error) {
    console.log(error)
  }
}