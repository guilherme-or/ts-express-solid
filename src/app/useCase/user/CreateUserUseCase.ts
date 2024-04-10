import { Request, Response } from "express";
import { User } from "../../../domain/user/User";
import { UserRequestBody } from "../../../domain/user/UserRequestBody";
import { UserUseCase } from "./UserUseCase";

export class CreateUserUseCase extends UserUseCase {
  public async action(request: Request, response: Response): Promise<Response> {
    const { name, email, id }: UserRequestBody = request.body;

    const user: User = await this.userRepository.create(name, email, id);

    return response.status(201).json(user);
  }
}
