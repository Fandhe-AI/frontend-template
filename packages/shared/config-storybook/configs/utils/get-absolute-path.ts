import { dirname, join } from "node:path";

export const getAbsolutePath = (value: string): string =>
  dirname(require.resolve(join(value, "package.json")));
