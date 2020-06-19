import { CharacterModel } from "../../server/models";
import { HandlerWithSession } from "../../types";
import {
  withParameterValidation,
  withSession,
  dbConnect,
} from "../../server/helpers";

const handler: HandlerWithSession = async (req, res) => {
  const { _id, ...data } = req.body;

  try {
    await dbConnect();
    await CharacterModel.updateOne({ _id }, data);
    return res.json({
      isSuccess: true,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default withParameterValidation(
  "endurance",
  "strength",
  "accuracy",
  "mobility",
  "name",
  "_id"
)(withSession(handler));
