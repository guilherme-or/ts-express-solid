import { Request, Response } from "express";
import { UserUseCase } from "./UserUseCase";

export class DeleteUserUseCase extends UserUseCase {
  public async action(request: Request, response: Response): Promise<Response> {
    const id: number = Number(request.params.id);

    await this.userRepository.delete(id);

    return response.status(204).send();
  }
}
