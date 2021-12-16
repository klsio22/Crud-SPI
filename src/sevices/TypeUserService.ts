import { getCustomRepository } from "typeorm";
import { TypeRepository } from "../repositories/TypeRepository";

export class TypeUserService {
  async create(name: string) {
    const repository = getCustomRepository(TypeRepository);

    const typeUser = repository.create({
      name,
    });

    await repository.save(typeUser);
    return typeUser;
  }
}
