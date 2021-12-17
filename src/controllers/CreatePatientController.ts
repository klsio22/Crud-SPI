import { Request, Response } from "express";
import { CreatePatientService } from "../sevices/CreatePatientService";

export class CreatePatientController {
  async create(request: Request, response: Response) {
    const {
      name,
      clinic,
      age,
      rg,
      cpf,
      gender,
      address,
      zip_code,
      number,
      uf,
      state,
      status,
      user_id,
    } = request.body;

    const service = new CreatePatientService();

    const result = await service.create({
      name,
      clinic,
      age,
      rg,
      cpf,
      gender,
      address,
      zip_code,
      number,
      uf,
      state,
      status,
      user_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
