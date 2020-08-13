import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import mongoose from "mongoose";

import {
  NextApiRequestWithSession,
  HandlerWithSession,
  Session,
} from "../types";

export async function dbConnect() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(`${process.env.MONGO_URL}/${process.env.MONGO_DB}`, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      w: "majority",
    });
  }

  return;
}

export function withParameterValidation(...parameters: string[]) {
  return function (handler: NextApiHandler) {
    return function (req: NextApiRequest, res: NextApiResponse) {
      const missingParameter = parameters.filter(
        (parameter) => !req.body[parameter] && !req.query[parameter]
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

export function withSession(handler: HandlerWithSession) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session: Session = await getSession({ req });

    if (!session) {
      return res.status(401).end();
    }

    const reqWithSession = { ...req, session } as NextApiRequestWithSession;

    return handler(reqWithSession, res);
  };
}
