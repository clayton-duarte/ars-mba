import { NextApiHandler } from "next";

import { withParameterValidation, dbConnect } from "../../server/helpers";
import { UserModel } from "../../server/models";

const handler: NextApiHandler = async (req, res) => {
  const { username, password } = req.body;

  await dbConnect();
  const user = await UserModel.create({ username, password });

  return res.json({ user, isSuccess: true });
};

export default withParameterValidation("username", "password")(handler);
