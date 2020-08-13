import mongoose from "mongoose";

import { User, Character } from "../types";

export const UserSchema = new mongoose.Schema<User>({
  username: String,
  password: String,
});

export const CharacterSchema = new mongoose.Schema<Character>({
  endurance: Number,
  strength: Number,
  accuracy: Number,
  mobility: Number,
  name: String,
  user: String,
});
