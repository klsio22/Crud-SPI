import { getCustomRepository, Repository } from "typeorm";
import { TypeUser } from "../entities/TypeUser";
import { TypeRepository } from "../repositories/TypeRepository";

export class TypeUserService {
  async create(name: string) {
    const repository: Repository<TypeUser> = getCustomRepository(TypeRepository);


    console.log(repository);
    const typeUser = repository.create({
      name,
    });

    await repository.save(typeUser);
    return typeUser;
  }
}
