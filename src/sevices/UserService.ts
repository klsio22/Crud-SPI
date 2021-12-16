import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

type CreateUser = {
  email: string;
  password: string;
  type_user_id: string;
};

export class UserService {
  async create({ email, password, type_user_id }: CreateUser) {
    const repository = getCustomRepository(UserRepository);
    
    const user = repository.create({
      email,
      password,
      type_user_id,
    });

    await repository.save(user);

    return user;
  }
}
