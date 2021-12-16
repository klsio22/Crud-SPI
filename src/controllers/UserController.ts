import { Request, Response } from "express";

import { UserService } from "../sevices/UserService";

export class UserController {
  async create(request: Request, response: Response) {
    const { email, password, type_user_id } = request.body;
    const service = new UserService();
    const result = await service.create({ email, password, type_user_id });
    console.log(result);
    return response.json(result);
  }
}
