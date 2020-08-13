import { HandlerWithSession } from "../../types";
import { dbConnect, withSession } from "../../server/helpers";
import { CharacterModel } from "../../server/models";

const handler: HandlerWithSession = async (req, res) => {
  await dbConnect();
  try {
    const chars = await CharacterModel.find({ user: req.session.user.email });
    return res.json(chars);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default withSession(withSession(handler));
