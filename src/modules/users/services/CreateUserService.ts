import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import User from "../typeorm/entities/User";
import { IUser } from "../interfaces/users";
import { hash } from "bcryptjs";

export default class CreateUserService {
  public static async execute({name, password, email}: IUser ): Promise<User | {} > {
    const userRepository = getCustomRepository(UsersRepository);
    
    const userExists = await userRepository.findByEmail(email);
    
    if(userExists){
        return {message: 'User Exists!'};
    }

    const passHash = await hash(password, 8);

    const user = userRepository.create({
        name,
        email,
        password: passHash,
    })

    await userRepository.save(user);

    return user;
  }
}
