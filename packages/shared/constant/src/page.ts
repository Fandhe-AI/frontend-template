export const PAGE_LIST = {
  home: {
    url: "/",
    title: "ホーム",
    description: "ホームページ",
  },
  login: {
    url: "/login",
    title: "ログイン",
    description: "ログインページ",
  },
  register: {
    url: "/register",
    title: "登録",
    description: "登録ページ",
  },
  registerVerify: {
    url: "/register/verify",
    title: "登録確認",
    description: "登録確認ページ",
  },
  registerComplete: {
    url: "/register/complete",
    title: "登録完了",
    description: "登録完了ページ",
  },
} as const;

export const PAGE_URL_LIST = Object.fromEntries(
  Object.entries(PAGE_LIST).map(([key, value]) => [key, value.url]),
) as { [K in keyof typeof PAGE_LIST]: (typeof PAGE_LIST)[K]["url"] };

export const PAGE_TITLE_LIST = Object.fromEntries(
  Object.entries(PAGE_LIST).map(([key, value]) => [key, value.title]),
) as { [K in keyof typeof PAGE_LIST]: (typeof PAGE_LIST)[K]["title"] };

export type PageKey = keyof typeof PAGE_LIST;
export type PageUrlValue = (typeof PAGE_URL_LIST)[keyof typeof PAGE_URL_LIST];
export type PageTitleValue =
  (typeof PAGE_TITLE_LIST)[keyof typeof PAGE_TITLE_LIST];
