import { TypeUserService } from "../sevices/TypeUserService";
import { Request, Response } from "express";

export class TypeUserController {
  async create(request: Request, response: Response) {
    const { name } = request.body;
    const service = new TypeUserService();
    const result = await service.create(name);
    console.log(result);
    return response.json(result);
  }
}
