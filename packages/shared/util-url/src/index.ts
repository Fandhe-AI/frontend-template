import { PAGE_URL_LIST, type PageKey } from "@repo/shared-constant";

export const getUrl = <T extends string = PageKey>(
  key: T,
  params?: Record<string, string>,
  searchParams?: Record<string, string>,
  urlList: Record<T, string> = PAGE_URL_LIST as Record<T, string>,
) => {
  const url = urlList[key].replace(
    /\{\{([^}]+)\}\}/g,
    (match, p1) => params?.[p1] || match,
  );

  if (searchParams && Object.keys(searchParams).length > 0) {
    const urlParams = new URLSearchParams();
    for (const [key, value] of Object.entries(searchParams)) {
      urlParams.set(key, value);
    }
    return `${url}?${urlParams.toString()}`;
  }

  return url;
};

export const getFullUrl = <T extends string = PageKey>(
  baseUrl: string,
  key: T,
  params?: Record<string, string>,
  searchParams?: Record<string, string>,
  urlList?: Record<T, string>,
) => {
  return `${baseUrl}${getUrl(key, params, searchParams, urlList)}`;
};
