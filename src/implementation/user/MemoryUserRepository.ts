import { User } from "../../domain/user/User";
import { UserNotFoundError } from "../../domain/user/UserNotFoundError";
import { UserRepository } from "../../domain/user/UserRepository";
import { UserValidationError } from "../../domain/user/UserValidationError";

export class MemoryUserRepository implements UserRepository {
  private users: User[];

  constructor() {
    this.users = [
      new User("William", "wmro@gmail.com", 1),
      new User("Beatrice", "beetx@hotmail.com", 2),
      new User("Wendel", "wndln@icloud.com", 3),
      new User("Ela", "elapo@outlook.com", 4),
    ];
  }

  private getNextAvailableId(): number {
    let nextId = 1;

    // ascending order
    const sortedIds = this.users.map((user) => user.id).sort((a, b) => a! - b!);

    for (const id of sortedIds) {
      if (id !== nextId) {
        return nextId;
      }
      nextId++;
    }

    return nextId;
  }

  public async findAll(): Promise<User[]> {
    return this.users.slice().sort((a: User, b: User) => a.id! - b.id!);
  }

  public async findById(id: number): Promise<User> {
    const requestedUser: User | undefined = this.users.find(
      (user: User) => user.id === id
    );

    if (!requestedUser) {
      throw new UserNotFoundError(`User of id ${id} was not found`);
    }

    return requestedUser;
  }

  public async create(name: string, email: string, id?: number): Promise<User> {
    if (id && this.users.find((user: User) => user.id === id)) {
      throw new UserValidationError(`User with id ${id} was already created`);
    }

    const newUser = new User(name, email, id || this.getNextAvailableId());
    this.users.push(newUser);

    return newUser;
  }

  public async update(name: string, email: string, id: number): Promise<User> {
    const oldUser = await this.findById(id);
    const newUser = new User(name, email, id);

    const oldUserIndex = this.users.findIndex(
      (user: User) => user.id! === oldUser.id!
    );

    this.users[oldUserIndex] = newUser;

    return newUser;
  }

  public async delete(id: number): Promise<void> {
    const requestedUser = await this.findById(id);

    const userIndex = this.users.findIndex(
      (user: User) => user.id === requestedUser.id!
    );

    this.users.splice(userIndex, 1);
  }
}
