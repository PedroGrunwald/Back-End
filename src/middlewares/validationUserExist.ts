import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/users.entity"
import { AppError } from "../errors/AppError"


const validationUserExist = async (req: Request, res: Response, next: NextFunction) => {

    const foundUser = AppDataSource.getRepository(User)
    const reqParamsId = parseInt(req.params.id)
    const user = await foundUser.findOneBy({
        id: reqParamsId
    })
    
    if(!user) {        
        throw new AppError('User not found', 404)
    }

   return next()
}

export default validationUserExist