
import { Request, Response } from "express";
import deleteUserService from "../../Services/user/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const active = req.body.user.isActive
  const deleteUser = await deleteUserService(req.params.id, active)
  return res.status(204).json(deleteUser)
}
export default deleteUserController