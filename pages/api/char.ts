import { HandlerWithSession } from "../../types";
import { CharacterModel } from "../../server/models";
import {
  withParameterValidation,
  withSession,
  dbConnect,
} from "../../server/helpers";

const handler: HandlerWithSession = async (req, res) => {
  const charId = req.query.charId;

  await dbConnect();
  try {
    const char = await CharacterModel.findOne({
      user: req.session.user.email,
      _id: charId,
    });
    if (!char) return res.status(404).json(char);
    return res.json(char);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default withParameterValidation("charId")(withSession(handler));
