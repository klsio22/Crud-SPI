import { getCustomRepository } from "typeorm";
import { PatientRepository } from "../repositories/PatientRepository";

type PatientRequest = {
  name: string;
  clinic: number;
  age: number;
  rg: number;
  cpf: number;
  gender: string;
  zip_code: number;
  address: string;
  number: number;
  uf: string;
  state: string;
  status: string;
  user_id: string;
};

export class CreatePatientService {
  async create({
    name,
    clinic,
    age,
    rg,
    cpf,
    gender,
    zip_code,
    address,
    number,
    uf,
    state,
    status,
    user_id,
  }: PatientRequest): Promise<PatientRequest | Error> {
    const repository = getCustomRepository(PatientRepository);

    if (await repository.findOne({ cpf, rg })) {
      return new Error("CPF and RG alredy exists");
    }

    const patient = repository.create({
      name,
      clinic,
      age,
      rg,
      cpf,
      gender,
      zip_code,
      address,
      number,
      uf,
      state,
      status,
      user_id,
    });

    await repository.save(patient);

    return patient;
  }
}
