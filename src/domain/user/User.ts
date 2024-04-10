import { UserValidationError } from "./UserValidationError";

export class User {
  public constructor(
    public name: string,
    public email: string,
    public readonly id?: number
  ) {
    this._validate();
  }

  private _validate() {
    if (!this.id && (!this.name || !this.email)) {
      throw new UserValidationError("Missing user name or email with empty id");
    }

    if (this.name.length <= 0) {
      throw new UserValidationError("Empty user name");
    }
  }
}
