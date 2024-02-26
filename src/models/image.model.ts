import { Document, Schema, model, models } from "mongoose";
import { IUser } from "./user.model";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: string;
  height?: string;
  config?: object;
  aspectRation?: string;
  color?: string;
  prompt?: string;
  author: Schema.Types.ObjectId | IUser;
  createdAt: Date;
  updatedAt: Date;
}

const ImageSchema = new Schema({
  title: { type: String, require: true },
  transformationType: { type: String, require: true },
  publicId: { type: String, require: true },
  secureUrl: { type: URL, require: true },
  width: { type: String },
  height: { type: String },
  config: { type: Object },
  aspectRation: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
