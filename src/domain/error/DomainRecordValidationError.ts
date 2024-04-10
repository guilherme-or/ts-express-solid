import { DomainError } from "./DomainError";

export class DomainRecordValidationError extends DomainError {
  constructor(message?: string) {
    super(message ?? "Invalid record");
  }
}
