import { type RouteConfig, route } from "@react-router/dev/routes";
import { handlers } from "@repo/shared-api-mock";
import { setupServer } from "msw/node";

export const server = setupServer(...handlers);
server.listen();

export default [route("*", "routes/api.tsx")] satisfies RouteConfig;
