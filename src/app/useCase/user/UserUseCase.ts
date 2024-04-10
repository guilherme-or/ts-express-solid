import { UserRepository } from "../../../domain/user/UserRepository";
import { UseCase } from "../UseCase";

export abstract class UserUseCase extends UseCase {
  public constructor(protected userRepository: UserRepository) {
    super();
  }
}
