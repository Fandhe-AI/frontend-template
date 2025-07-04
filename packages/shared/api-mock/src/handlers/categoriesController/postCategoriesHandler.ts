// @ts-nocheck

import { http } from "msw";

import { createPostCategoriesMutationResponse } from "../../mocks/categoriesController/createPostCategories";
import type { PostCategoriesMutationResponse } from "../../types/categoriesController/PostCategories";

export function postCategoriesHandler(
  data?:
    | PostCategoriesMutationResponse
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Response),
) {
  return http.post("http://localhost:8001/categories", function handler(info) {
    if (typeof data === "function") return data(info);

    return new Response(
      JSON.stringify(data || createPostCategoriesMutationResponse(data)),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
}
