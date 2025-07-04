// @ts-nocheck

import { http } from "msw";

import { createPostAuthRefreshMutationResponse } from "../../mocks/authController/createPostAuthRefresh";
import type { PostAuthRefreshMutationResponse } from "../../types/authController/PostAuthRefresh";

export function postAuthRefreshHandler(
  data?:
    | PostAuthRefreshMutationResponse
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Response),
) {
  return http.post(
    "http://localhost:8001/auth/refresh",
    function handler(info) {
      if (typeof data === "function") return data(info);

      return new Response(
        JSON.stringify(data || createPostAuthRefreshMutationResponse(data)),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    },
  );
}
