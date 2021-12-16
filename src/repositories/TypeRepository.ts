import { TypeUser } from '../entities/TypeUser';
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(TypeUser)
class TypeRepository extends Repository<TypeUser> { }

export { TypeRepository }