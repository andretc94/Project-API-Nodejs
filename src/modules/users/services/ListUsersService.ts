import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import User from "../typeorm/entities/User";

export default class ListUsersService {
  public static async execute(): Promise<User[]> {
    const userRepository = getCustomRepository(UsersRepository);
    return await userRepository.find();
  }
}
