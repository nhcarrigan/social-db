import { Document, model, Schema } from "mongoose";

export interface UserCardInt extends Document {
  username: string;
  password: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  tumblr?: string;
  portfolio?: string;
}

export const UserCardSchema = new Schema({
  username: String,
  password: String,
  facebook: String,
  twitter: String,
  linkedin: String,
  github: String,
  tumblr: String,
  portfolio: String,
});

export const UserCard = model<UserCardInt>("usercard", UserCardSchema);