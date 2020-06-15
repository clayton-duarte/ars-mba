import { HandlerWithSession } from "../../types";
import { CharacterModel } from "../../server/models";
import { withSession, dbConnect } from "../../server/helpers";

const handler: HandlerWithSession = async (req, res) => {
  const user = req.session.get("user");

  await dbConnect();
  try {
    const chars = await CharacterModel.find({ user: user._id });
    return res.json(chars);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default withSession(handler);
