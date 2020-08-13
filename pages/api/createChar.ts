import { HandlerWithSession } from "../../types";
import { CharacterModel } from "../../server/models";
import {
  withParameterValidation,
  withSession,
  dbConnect,
} from "../../server/helpers";

const handler: HandlerWithSession = async (req, res) => {
  try {
    await dbConnect();
    const newChar = await CharacterModel.create({
      ...req.body,
      user: req.session.user.email,
    });
    return res.json(newChar);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default withParameterValidation(
  "endurance",
  "strength",
  "accuracy",
  "mobility",
  "name"
)(withSession(handler));
