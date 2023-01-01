import { Request, Response } from "express";
import listUserServices from "../../Services/user/listAllUsers.service";

const listUserController = async (req: Request, res: Response) => {
  const users = await listUserServices();
  return res.json(users);
};

export { listUserController };