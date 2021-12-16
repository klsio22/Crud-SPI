import { getCustomRepository } from "typeorm";
import { PatientRepository } from "../repositories/PatientRepository";

type CreatePatient = {
  name: string;
  clinic: number;
  age: number;
  rg: number;
  cpf: number;
  gender: number;
  zipCode: number;
  address: number;
  number: number;
  uf: string;
  state: string;
  status: string;
  created_at: string;
  userId: string;
};

export class CreatePatientService {
  async create({
    name,
    clinic,
    age,
    rg,
    cpf,
    gender,
    zipCode,
    address,
    number,
    uf,
    state,
    status,
    userId,
  }: CreatePatient) {
    
    const repository = getCustomRepository(PatientRepository);

    const patient = repository.create({
      name,
      clinic,
      age,
      rg,
      cpf,
      gender,
      zipCode,
      address,
      number,
      uf,
      state,
      status,
      userId,
    });

    await repository.save(patient);
    return patient;
  }
}
