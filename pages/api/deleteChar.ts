import { HandlerWithSession } from "../../types";
import { CharacterModel } from "../../server/models";
import {
  withParameterValidation,
  withSession,
  dbConnect,
} from "../../server/helpers";

const handler: HandlerWithSession = async (req, res) => {
  const { charId } = req.query;

  try {
    await dbConnect();
    await CharacterModel.deleteOne({ _id: charId });
    return res.json({
      isSuccess: true,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default withParameterValidation("charId")(withSession(handler));
