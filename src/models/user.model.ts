import { Document, Schema, model, models } from "mongoose";

export interface IUser {
  clerkId: string;
  userName: string;
  firstName?: string;
  lastName?: string;
  email: string;
  photo: string;
  planId?: number;
  creditBalance?: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, require: true, unique: true },
  userName: { type: String, require: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, require: true, unique: true },
  photo: { type: String, require: true },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const User = models?.User || model("User", UserSchema);

export default User;
