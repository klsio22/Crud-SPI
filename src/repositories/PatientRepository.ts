import { Patient } from './../entities/Patient';
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Patient)
class PatientRepository extends Repository<Patient> { }

export { PatientRepository }