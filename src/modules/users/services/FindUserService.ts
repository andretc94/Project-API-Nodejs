import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import User from "../typeorm/entities/User";
import { IUser } from "../interfaces/users";

export default class CreateUserService {
  public static async execute({ id }: IUser): Promise<User | undefined | {}> {
    try {
      const userRepository = getCustomRepository(UsersRepository);
      const user = await userRepository.findById(id);
      return user;
    } catch (error) {
      return { message: "User not found!" };
    }
  }
}
