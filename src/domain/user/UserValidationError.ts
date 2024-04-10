import { DomainRecordValidationError } from "../error/DomainRecordValidationError";

export class UserValidationError extends DomainRecordValidationError {
  constructor(message?: string) {
    super(message ?? "Invalid user");
  }
}
