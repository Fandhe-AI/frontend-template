import { createCustomError } from "./createCustomError";

export function createInternalServerError() {
  return createCustomError();
}
