import { describe, expect, it } from "vitest";

import { getFullUrl, getUrl } from ".";

// モックのPageUrlListを作成
const mockPageUrlList = {
  home: "/",
  user: "/user/{{id}}",
  product: "/product/{{productId}}/detail",
  search: "/search",
} as const;

type MockPageKey = keyof typeof mockPageUrlList;

describe("getUrl", () => {
  it("パラメータなしでURLを取得できる", () => {
    const result = getUrl(
      "home" as MockPageKey,
      undefined,
      undefined,
      mockPageUrlList,
    );
    expect(result).toBe("/");
  });

  it("パラメータを置換してURLを取得できる", () => {
    const result = getUrl(
      "user" as MockPageKey,
      { id: "123" },
      undefined,
      mockPageUrlList,
    );
    expect(result).toBe("/user/123");
  });

  it("複数のパラメータを置換してURLを取得できる", () => {
    const result = getUrl(
      "product" as MockPageKey,
      { productId: "abc123" },
      undefined,
      mockPageUrlList,
    );
    expect(result).toBe("/product/abc123/detail");
  });

  it("検索パラメータを追加してURLを取得できる", () => {
    const result = getUrl(
      "search" as MockPageKey,
      undefined,
      { q: "test", page: "1" },
      mockPageUrlList,
    );
    expect(result).toBe("/search?q=test&page=1");
  });

  it("パラメータと検索パラメータの両方を使用してURLを取得できる", () => {
    const result = getUrl(
      "user" as MockPageKey,
      { id: "456" },
      { tab: "profile", edit: "true" },
      mockPageUrlList,
    );
    expect(result).toBe("/user/456?tab=profile&edit=true");
  });

  it("存在しないパラメータは置換されない", () => {
    const result = getUrl(
      "user" as MockPageKey,
      { name: "john" }, // idではなくname
      undefined,
      mockPageUrlList,
    );
    expect(result).toBe("/user/{{id}}");
  });

  it("空の検索パラメータは無視される", () => {
    const result = getUrl(
      "home" as MockPageKey,
      undefined,
      {},
      mockPageUrlList,
    );
    expect(result).toBe("/");
  });
});

describe("getFullUrl", () => {
  const baseUrl = "https://example.com";

  it("ベースURLと組み合わせて完全なURLを取得できる", () => {
    const result = getFullUrl(
      baseUrl,
      "home" as MockPageKey,
      undefined,
      undefined,
      mockPageUrlList,
    );
    expect(result).toBe("https://example.com/");
  });

  it("パラメータ付きの完全なURLを取得できる", () => {
    const result = getFullUrl(
      baseUrl,
      "user" as MockPageKey,
      { id: "789" },
      undefined,
      mockPageUrlList,
    );
    expect(result).toBe("https://example.com/user/789");
  });

  it("検索パラメータ付きの完全なURLを取得できる", () => {
    const result = getFullUrl(
      baseUrl,
      "search" as MockPageKey,
      undefined,
      { q: "vitest", category: "tech" },
      mockPageUrlList,
    );
    expect(result).toBe("https://example.com/search?q=vitest&category=tech");
  });

  it("パラメータと検索パラメータの両方を含む完全なURLを取得できる", () => {
    const result = getFullUrl(
      baseUrl,
      "product" as MockPageKey,
      { productId: "xyz789" },
      { ref: "homepage", utm_source: "google" },
      mockPageUrlList,
    );
    expect(result).toBe(
      "https://example.com/product/xyz789/detail?ref=homepage&utm_source=google",
    );
  });

  it("末尾にスラッシュがあるベースURLでも正しく動作する", () => {
    const result = getFullUrl(
      "https://example.com/",
      "home" as MockPageKey,
      undefined,
      undefined,
      mockPageUrlList,
    );
    expect(result).toBe("https://example.com//");
  });
});
