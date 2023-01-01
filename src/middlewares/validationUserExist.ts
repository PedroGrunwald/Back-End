import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/users.entity"
import { AppError } from "../errors/AppError"


const validationUserExist = async (req: Request, res: Response, next: NextFunction) => {

    const foundUser = AppDataSource.getRepository(User)

    const user = await foundUser.findOneBy({
        id: req.params.id
    })
    
    if(!user) {        
        throw new AppError('User not found', 404)
    }

   return next()
}

export default validationUserExist