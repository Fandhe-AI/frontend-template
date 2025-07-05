import { createCustomError } from "./createCustomError";

export function createBadRequest() {
  return createCustomError();
}
