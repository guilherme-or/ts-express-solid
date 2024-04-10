import { Request, Response } from "express";
import { User } from "../../../domain/user/User";
import { UserUseCase } from "./UserUseCase";

export class ViewUserUseCase extends UserUseCase {
  public async action(request: Request, response: Response): Promise<Response> {
    const id: number = Number(request.params.id);

    const user: User = await this.userRepository.findById(id);

    return response.status(200).json(user);
  }
}
