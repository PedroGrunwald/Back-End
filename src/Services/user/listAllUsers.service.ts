import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { listUsersReturnedData } from "../../schemas/user.schema";

const listUserServices = async (): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const returnData = await listUsersReturnedData.validate(users, {
    stripUnknown: true,
  });
  return returnData;
};

export default listUserServices;