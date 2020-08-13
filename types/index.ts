import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export interface User {
  email: string;
  image: string;
  name: string;
}

export interface Session {
  accessToken: string;
  expires: string;
  user: User;
}

export interface NextApiRequestWithSession extends NextApiRequest {
  session: Session;
}

export type HandlerWithSession<T = any> = (
  req: NextApiRequestWithSession,
  res: NextApiResponse<T>
) => void | Promise<void>;

export interface Character {
  endurance: number;
  strength: number;
  accuracy: number;
  mobility: number;
  user: string;
  name: string;
  _id?: string;
}
