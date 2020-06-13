import mongoose from "mongoose";

import { User } from "../types";

export const UserSchema = new mongoose.Schema<User>({
  username: String,
  password: String,
});
