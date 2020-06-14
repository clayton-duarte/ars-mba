import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { withIronSession } from "next-iron-session";
import mongoose from "mongoose";

import { HandlerWithSession, NextApiRequestWithSession } from "../types";

export function withSession<T = any>(
  handler: HandlerWithSession<T>,
  isPrivate = true
) {
  function protectedHandler(
    req: NextApiRequestWithSession,
    res: NextApiResponse
  ) {
    if (isPrivate) {
      const user = req.session.get("user");
      if (!user) {
        req.session.destroy();
        return res.status(401).send("Please log in!");
      }
    }
    return handler(req, res);
  }

  return withIronSession(protectedHandler, {
    cookieOptions: { secure: process.env.NODE_ENV === "production" },
    password: process.env.SESSION_PASSWORD,
    cookieName: "survival-iron-session",
  });
}

export async function dbConnect() {
  const MDB_USER = process.env.MDB_USER;
  const MDB_URI = process.env.MDB_URI;
  const MDB_PW = process.env.MDB_PW;

  const uri = `mongodb+srv://${MDB_USER}:${MDB_PW}@${MDB_URI}`;
  const options = {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    w: "majority",
  };

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(uri, options);
  }

  return;
}

export function withParameterValidation(...parameters: string[]) {
  return function (handler: NextApiHandler) {
    return function (req: NextApiRequest, res: NextApiResponse) {
      const missingParameter = parameters.filter(
        (parameter) => !req.body[parameter]
      );

      if (missingParameter.length) {
        const missingParameterString = missingParameter.join(", ");
        const message = `Missing required parameter(s): ${missingParameterString}`;
        return res.status(400).send(message);
      }

      return handler(req, res);
    };
  };
}
