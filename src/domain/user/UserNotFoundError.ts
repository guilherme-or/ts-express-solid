import { DomainRecordNotFoundError } from "../error/DomainRecordNotFoundError";

export class UserNotFoundError extends DomainRecordNotFoundError {
  constructor(message?: string) {
    super(message ?? "The requested user was not found");
  }
}
