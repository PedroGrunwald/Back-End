import { Router } from "express"
import { createUserController } from "../Controllers/user/createUserController"
import deleteUserController from "../Controllers/user/deleteUser.controller"
import { listUserController } from "../Controllers/user/listAllUsers.controller"
import updateUserController from "../Controllers/user/updateUser.cotroller"
import validationEmailUsed from "../middlewares/validationEmail"
import cantUpdateDataMiddleware from "../middlewares/validationIfNotUpdate"
import validationToken from "../middlewares/validationToken"
import validationUserExist from "../middlewares/validationUserExist"
import validationAdm from "../middlewares/validationAdm"



const usersRoute = Router()

usersRoute.post('',validationEmailUsed, createUserController)
usersRoute.get('',validationToken,validationAdm, listUserController)
usersRoute.patch('/:id', validationToken, validationAdm,cantUpdateDataMiddleware,validationEmailUsed, updateUserController)
usersRoute.delete('/id', validationUserExist, validationToken, deleteUserController)

export default usersRoute
