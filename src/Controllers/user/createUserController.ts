import { Request, Response } from "express";
import { IUser, IUserRequest } from "../../interfaces/users/index";
import createUserService from "../../Services/user/createUser.service"


const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body;
    const [status, newUser] = await createUserService(userData);
    return res.status(status as number).json(newUser);
  };

export { createUserController };