import { createCustomError } from "./createCustomError";

export function createUnauthorized() {
  return createCustomError();
}
