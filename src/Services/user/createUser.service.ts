import {IUser, IUserRequest} from "../../interfaces/users/index"
import AppDataSource from "../../data-source"
import { AppError } from "../../errors/AppError"
import { User } from "../../entities/users.entity"

const createUserService = async (
    userData: IUserRequest
  ): Promise<Array<User | number | string | {}>> => {
    const userRepository = AppDataSource.getRepository(User);
    const validationEmail = await userRepository.findOneBy({
      email: userData.email,
    });
    if (validationEmail) {
      throw new AppError("Email already exist", 400);
    }
    const user = userRepository.create(userData);
    await userRepository.save(user);
  
    const { password, ...Newuser } = user;
  
    return [201, Newuser];
  };

  export default createUserService