import bcrypt from "bcrypt";

import { User, HandlerWithSession } from "../../types";
import { UserModel } from "../../server/models";
import {
  withParameterValidation,
  withSession,
  dbConnect,
} from "../../server/helpers";

const verifyOrCreateUser = async ({
  username,
  password,
}: User): Promise<User> => {
  // Look for a existent user (case insensitive)
  await dbConnect();
  const existentUser = await UserModel.findOne({
    username: username.toLowerCase(),
  });
  if (existentUser) {
    // Verify password
    const isPasswordValid = await bcrypt.compare(
      password,
      existentUser.password
    );
    if (isPasswordValid) return existentUser;
    // return void if password is not valid
    return;
  }

  // Hash password before save it
  const hash = await bcrypt.hash(password, 12);
  const newUser = await UserModel.create({ username, password: hash });
  return newUser;
};

// HANDLER
const handler: HandlerWithSession = async (req, res) => {
  // Verify  user
  const user = await verifyOrCreateUser(req.body);
  if (!user) return res.status(401).send("Incorrect username or password");

  // Save user on session if found one
  req.session.set("user", user);
  await req.session.save();

  return res.json({ user, isSuccess: true });
};

export default withSession(
  withParameterValidation("username", "password")(handler),
  false
);
