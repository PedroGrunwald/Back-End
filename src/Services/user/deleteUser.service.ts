import AppDataSource from '../../data-source'
import { User } from '../../entities/users.entity'
import { AppError } from '../../errors/AppError'


const deleteUserService = async (userId: string, isActive: Boolean) => {
    const userRepository = AppDataSource.getRepository(User)

    const searchUser = await userRepository.findOneBy({
        id: userId
    })
    if (!searchUser) {
        throw new AppError('Id não encontrado', 404)
    }
    if (!searchUser.isActive) {
        throw new AppError('usuario não existe', 400)
    }


    searchUser.isActive = false

    await userRepository.save(searchUser)

};
export default deleteUserService