import mongoose, { Document } from "mongoose";

import { UserSchema } from "./schemas";
import { User } from "../types";

function initializeModel<Type>(model, schema) {
  type Doc = Type & Document;
  if (mongoose.models[model]) return mongoose.model<Doc>(model);
  return mongoose.model<Doc>(model, schema);
}

export const UserModel = initializeModel<User>("User", UserSchema);
