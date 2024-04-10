import { DomainError } from "./DomainError";

export class DomainRecordNotFoundError extends DomainError {
  constructor(message?: string) {
    super(message ?? "Record not found");
  }
}
