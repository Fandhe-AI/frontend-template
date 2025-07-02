import { data } from "react-router";

import type { Route } from "./+types/api";

const handler = async ({ request, params }: Route.ActionArgs) => {
  const method = request.method.toLowerCase();
  const { "*": splat } = params;

  try {
    const url = `${import.meta.env.VITE_MOCK_API_BASE_URL}/${splat}?${new URL(request.url).searchParams.toString()}`;
    const requestInit: RequestInit = {
      ...request,
      method: request.method,
    };

    // リクエストボディがある場合は追加
    if (["post", "put", "patch"].includes(method)) {
      const contentType = request.headers.get("content-type");
      if (contentType) {
        const body = await request.text();

        if (body) {
          requestInit.body = body;
        }
      }
    }

    const response = await fetch(url, requestInit);
    response.headers.set("Access-Control-Allow-Origin", "*");

    if (response.status === 204) {
      return data(undefined, {
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
      });
    }

    // レスポンスのステータスとヘッダーを保持
    const responseData = await response.json();
    return data(responseData, {
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
    });
  } catch (error) {
    console.error(error);
    return data({ message: "Not Found" }, { status: 404 });
  }
};

export const loader = handler;
export const action = handler;
