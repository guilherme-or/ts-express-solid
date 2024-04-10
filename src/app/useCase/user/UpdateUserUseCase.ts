import { Request, Response } from "express";
import { User } from "../../../domain/user/User";
import { UserRequestBody } from "../../../domain/user/UserRequestBody";
import { UserUseCase } from "./UserUseCase";

export class UpdateUserUseCase extends UserUseCase {
  public async action(request: Request, response: Response): Promise<Response> {
    const { name, email }: UserRequestBody = request.body;
    const id = Number(request.params.id);

    const user: User = await this.userRepository.update(name, email, id);

    return response.status(200).json(user);
  }
}
