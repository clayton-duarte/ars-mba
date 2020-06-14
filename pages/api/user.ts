import { User, HandlerWithSession } from "../../types";

import { withSession } from "../../server/helpers";

const handler: HandlerWithSession = (req, res) => {
  const user = req.session.get<User>("user");
  return res.json(user);
};

export default withSession(handler);
