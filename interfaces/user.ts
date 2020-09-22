import { Document, model, Schema } from "mongoose";

export interface UserCardInt extends Document {
  username: string;
  password: string;
  bio: string;
  bgcolour?: string;
  txtcolour?: string;
  avatar?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  tumblr?: string;
  portfolio?: string;
}

export const UserCardSchema: Schema<UserCardInt> = new Schema({
  username: String,
  password: String,
  bio: String,
  bgcolour: String,
  txtcolour: String,
  avatar: String,
  facebook: String,
  twitter: String,
  linkedin: String,
  github: String,
  tumblr: String,
  portfolio: String,
});

export const UserCard = model<UserCardInt>("usercard", UserCardSchema);
