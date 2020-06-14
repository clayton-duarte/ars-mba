import mongoose, { Document } from "mongoose";

import { UserSchema, CharacterSchema } from "./schemas";
import { User, Character } from "../types";

function initializeModel<Type>(model, schema) {
  type Doc = Type & Document;
  if (mongoose.models[model]) return mongoose.model<Doc>(model);
  return mongoose.model<Doc>(model, schema);
}

export const UserModel = initializeModel<User>("User", UserSchema);
export const CharacterModel = initializeModel<Character>(
  "Character",
  CharacterSchema
);
