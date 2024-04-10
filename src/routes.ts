import { Request, Response, Router } from "express";
import {
  createUserUseCase,
  deleteUserUseCase,
  listUsersUseCase,
  updateUserUseCase,
  viewUserUseCase,
} from "./repositories";

const router = Router();
const userRouter = Router();

// User router
userRouter.get("/", (request: Request, response: Response) =>
  listUsersUseCase.handle(request, response)
);
userRouter.get("/:id", (request: Request, response: Response) =>
  viewUserUseCase.handle(request, response)
);
userRouter.post("/", (request: Request, response: Response) =>
  createUserUseCase.handle(request, response)
);
userRouter.put("/:id", (request: Request, response: Response) =>
  updateUserUseCase.handle(request, response)
);
userRouter.delete("/:id", (request: Request, response: Response) =>
  deleteUserUseCase.handle(request, response)
);

// Main router
router.get("/", (request: Request, response: Response): Response => {
  const name = request.query.name ?? "world";
  return response.send(`Hello ${name}!`);
});

router.use("/users", userRouter);

export default router;
