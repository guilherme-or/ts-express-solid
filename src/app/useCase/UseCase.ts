import { Request, Response } from "express";
import { DomainError } from "../../domain/error/DomainError";
import { DomainRecordNotFoundError } from "../../domain/error/DomainRecordNotFoundError";
import { DomainRecordValidationError } from "../../domain/error/DomainRecordValidationError";

export abstract class UseCase {
  constructor() {} // declare dependencies here

  abstract action(request: Request, response: Response): Promise<Response>;

  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const actionResponse = await this.action(request, response);
      return actionResponse;
    } catch (error: any) {
      return this.errorPayload(error, response);
    }
  }

  private errorPayload(
    error: DomainError | any,
    response: Response,
    statusCode: number = 500
  ): Response {
    if (error instanceof DomainRecordNotFoundError) {
      statusCode = 404;
    } else if (error instanceof DomainRecordValidationError) {
      statusCode = 400;
    } else {
      statusCode = 500;
    }

    const payload = {
      statusCode: statusCode,
      error: {
        name: error.name,
        message: error.message,
        // stack: error.stack ?? null, // dev
      },
    };

    return response.status(statusCode).json(payload);
  }
}
