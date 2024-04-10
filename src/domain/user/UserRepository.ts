import { User } from "./User";
import { UserNotFoundError } from "./UserNotFoundError";
import { UserRequestBody } from "./UserRequestBody";
import { UserValidationError } from "./UserValidationError";

export interface UserRepository {
  /**
   * Find all users
   * @returns {Promise<User[]>}
   */
  findAll(): Promise<User[]>;

  /**
   * Find one user by id
   * @param {number} id
   * @throws {UserNotFoundError}
   */
  findById(id: number): Promise<User>;

  /**
   * Create user
   * @param {string} name
   * @param {string} email
   * @throws {UserValidationError}
   */
  create(name: string, email: string, id?: number): Promise<User>;

  /**
   * Update user by id
   * @param {string} name
   * @param {string} email
   * @param {number} id
   * @throws {UserNotFoundError | UserValidationError}
   */
  update(name: string, email: string, id: number): Promise<User>;

  /**
   * Delete user by id
   * @param {number} id 
   * @throws {UserNotFoundError}
   */
  delete(id: number): Promise<void>;
}
