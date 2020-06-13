import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-iron-session";

export interface User {
  username: string;
  password: string;
  _id?: string;
}

export interface NextApiRequestWithSession extends NextApiRequest {
  session: Session;
}

export type HandlerWithSession<T = any> = (
  req: NextApiRequestWithSession,
  res: NextApiResponse<T>
) => void | Promise<void>;
