import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../../database/db";

const getAvoId = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await new Database()
  const id = req.query.id;
  const avo = await db.getById(id as string);


  res.status(200).json(avo)
}

export default getAvoId