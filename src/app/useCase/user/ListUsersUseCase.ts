import { Request, Response } from "express";
import { UserUseCase } from "./UserUseCase";

export class ListUsersUseCase extends UserUseCase {
  public async action(request: Request, response: Response): Promise<Response> {
    const users = await this.userRepository.findAll();

    return response.status(200).json(users);
  }
}
