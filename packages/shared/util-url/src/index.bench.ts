import { bench, describe } from "vitest";

import { getFullUrl, getUrl } from "./index";

const mockUrlList = {
  home: "/",
  profile: "/profile/{{userId}}",
  settings: "/settings",
  search: "/search",
  admin: "/admin/{{section}}",
};

describe("URL utilities benchmark", () => {
  bench("getUrl - simple path", () => {
    getUrl("home", undefined, undefined, mockUrlList);
  });

  bench("getUrl - with params", () => {
    getUrl("profile", { userId: "123" }, undefined, mockUrlList);
  });

  bench("getUrl - with search params", () => {
    getUrl("search", undefined, { q: "test", page: "1" }, mockUrlList);
  });

  bench("getUrl - with params and search params", () => {
    getUrl(
      "admin",
      { section: "users" },
      { sort: "name", order: "asc" },
      mockUrlList,
    );
  });

  bench("getFullUrl - simple", () => {
    getFullUrl(
      "https://example.com",
      "home",
      undefined,
      undefined,
      mockUrlList,
    );
  });

  bench("getFullUrl - complex", () => {
    getFullUrl(
      "https://api.example.com",
      "admin",
      { section: "analytics" },
      { from: "2024-01-01", to: "2024-12-31" },
      mockUrlList,
    );
  });

  bench("getUrl - multiple param replacements", () => {
    const complexUrlList = {
      complex: "/api/{{version}}/{{resource}}/{{id}}/{{action}}",
    };
    getUrl(
      "complex",
      {
        version: "v1",
        resource: "users",
        id: "123",
        action: "profile",
      },
      { include: "posts,comments", limit: "10" },
      complexUrlList,
    );
  });

  bench("URLSearchParams creation", () => {
    const params = new URLSearchParams();
    params.set("key1", "value1");
    params.set("key2", "value2");
    params.set("key3", "value3");
    params.toString();
  });
});
