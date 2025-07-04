// @ts-nocheck

import { http } from "msw";

import { createGetCategoriesQueryResponse } from "../../mocks/categoriesController/createGetCategories";
import type { GetCategoriesQueryResponse } from "../../types/categoriesController/GetCategories";

export function getCategoriesHandler(
  data?:
    | GetCategoriesQueryResponse
    | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Response),
) {
  return http.get("http://localhost:8001/categories", function handler(info) {
    if (typeof data === "function") return data(info);

    return new Response(
      JSON.stringify(data || createGetCategoriesQueryResponse(data)),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
}
