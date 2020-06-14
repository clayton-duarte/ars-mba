import { HandlerWithSession } from "../../types";
import { CharacterModel } from "../../server/models";
import {
  withParameterValidation,
  withSession,
  dbConnect,
} from "../../server/helpers";

const handler: HandlerWithSession = async (req, res) => {
  const user = req.session.get("user");

  await dbConnect();
  const newChar = await CharacterModel.create({ ...req.body, user: user._id });

  res.json(newChar);
};

export default withParameterValidation(
  "endurance",
  "strength",
  "accuracy",
  "mobility",
  "name"
)(withSession(handler));
