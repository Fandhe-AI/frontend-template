import { createCustomError } from "./createCustomError";

export function createNotFound() {
  return createCustomError();
}
