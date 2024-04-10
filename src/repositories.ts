import { CreateUserUseCase } from "./app/useCase/user/CreateUserUseCase";
import { DeleteUserUseCase } from "./app/useCase/user/DeleteUserUseCase";
import { ListUsersUseCase } from "./app/useCase/user/ListUsersUseCase";
import { UpdateUserUseCase } from "./app/useCase/user/UpdateUserUseCase";
import { ViewUserUseCase } from "./app/useCase/user/ViewUserUseCase";
import { MemoryUserRepository } from "./implementation/user/MemoryUserRepository";

// Depencies

// ...

// Repositories

// User
const userRepository = new MemoryUserRepository();

// Use cases mapping

// User
const listUsersUseCase = new ListUsersUseCase(userRepository);
const viewUserUseCase = new ViewUserUseCase(userRepository);
const createUserUseCase = new CreateUserUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);

export {
  listUsersUseCase,
  viewUserUseCase,
  createUserUseCase,
  updateUserUseCase,
  deleteUserUseCase,
};
