// @ts-nocheck

import { http } from "msw";

import { createPostAuthLoginMutationResponse } from "../../mocks/authController/createPostAuthLogin";
import type { PostAuthLoginMutationResponse } from "../../types/authController/PostAuthLogin";

export function postAuthLoginHandler(
  data?:
    | PostAuthLoginMutationResponse
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Response),
) {
  return http.post("http://localhost:8001/auth/login", function handler(info) {
    if (typeof data === "function") return data(info);

    return new Response(
      JSON.stringify(data || createPostAuthLoginMutationResponse(data)),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
}
