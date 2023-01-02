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
import validationId from "../middlewares/validationId"
import validationAdmDelete from "../middlewares/validationAdmDelete"



const usersRoute = Router()

usersRoute.post('', createUserController)
usersRoute.get('',validationToken,validationAdm, listUserController)
usersRoute.patch('/:id', validationToken, validationAdmDelete,cantUpdateDataMiddleware,validationEmailUsed,validationId, updateUserController)
usersRoute.delete('/:id', validationUserExist, validationToken,validationAdm,deleteUserController)

export default usersRoute
