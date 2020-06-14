import { HandlerWithSession } from "../../types";

import { withSession } from "../../server/helpers";

const handler: HandlerWithSession = (req, res) => {
  req.session.destroy();
  return res.json({ isSuccess: true });
};

export default withSession(handler);
