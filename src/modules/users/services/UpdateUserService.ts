import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import User from "../typeorm/entities/User";
import { IUser } from "../interfaces/users";
import { hash } from "bcryptjs";

export default class CreateUserService {
  public static async execute({
    id,
    name,
    password,
    email,
  }: IUser): Promise<User | {}> {
    try {
      const userRepository = getCustomRepository(UsersRepository);
      const userExists = await userRepository.findById(id);
      if (!userExists) {
        return { message: "User not exists" };
      }

      const passHash = await hash(password, 8);

      const user = userRepository.create({
        id,
        name,
        email,
        password: passHash,
      });

      await userRepository.save(user);

      return user;
    } catch (error) {
      return { message: "Error" };
    }
  }
}
