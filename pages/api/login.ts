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
  await dbConnect();

  const existentUser = await UserModel.findOne({ username, password });
  if (existentUser) return existentUser;

  const newUser = await UserModel.create({ username, password });
  return newUser;
};

const handler: HandlerWithSession = async (req, res) => {
  const { username, password } = req.body;

  await dbConnect();
  const user = await verifyOrCreateUser({ username, password });

  req.session.set("user", user);
  await req.session.save();

  return res.json({ user, isSuccess: true });
};

export default withSession(
  withParameterValidation("username", "password")(handler),
  false
);
