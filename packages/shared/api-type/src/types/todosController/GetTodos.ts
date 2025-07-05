export const getTodosQueryParamsStatusEnum = {
  pending: "pending",
  completed: "completed",
  all: "all",
} as const;

export type GetTodosQueryParamsStatusEnum =
  (typeof getTodosQueryParamsStatusEnum)[keyof typeof getTodosQueryParamsStatusEnum];

export const getTodosQueryParamsPriorityEnum = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type GetTodosQueryParamsPriorityEnum =
  (typeof getTodosQueryParamsPriorityEnum)[keyof typeof getTodosQueryParamsPriorityEnum];

export const getTodosQueryParamsSortEnum = {
  created_at: "created_at",
  updated_at: "updated_at",
  due_date: "due_date",
  priority: "priority",
  title: "title",
} as const;

export type GetTodosQueryParamsSortEnum =
  (typeof getTodosQueryParamsSortEnum)[keyof typeof getTodosQueryParamsSortEnum];

export const getTodosQueryParamsOrderEnum = {
  asc: "asc",
  desc: "desc",
} as const;

export type GetTodosQueryParamsOrderEnum =
  (typeof getTodosQueryParamsOrderEnum)[keyof typeof getTodosQueryParamsOrderEnum];

export type GetTodosQueryParams = {
  /**
   * @description Todo の完了状態でフィルタリング
   * @default "all"
   * @type string | undefined
   */
  status?: GetTodosQueryParamsStatusEnum;
  /**
   * @description カテゴリ ID でフィルタリング
   * @type string | undefined
   */
  category?: string;
  /**
   * @description 優先度でフィルタリング
   * @type string | undefined
   */
  priority?: GetTodosQueryParamsPriorityEnum;
  /**
   * @description タイトルや説明での検索
   * @type string | undefined
   */
  search?: string;
  /**
   * @description ページ番号（1から開始）
   * @minLength 1
   * @default 1
   * @type integer | undefined
   */
  page?: number;
  /**
   * @description 1ページあたりの件数
   * @minLength 1
   * @maxLength 100
   * @default 20
   * @type integer | undefined
   */
  limit?: number;
  /**
   * @description 並び替えフィールド
   * @default "created_at"
   * @type string | undefined
   */
  sort?: GetTodosQueryParamsSortEnum;
  /**
   * @description 並び替え順序
   * @default "desc"
   * @type string | undefined
   */
  order?: GetTodosQueryParamsOrderEnum;
};

export const dataStatusEnum = {
  pending: "pending",
  completed: "completed",
} as const;

export type DataStatusEnum =
  (typeof dataStatusEnum)[keyof typeof dataStatusEnum];

export const dataPriorityEnum = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type DataPriorityEnum =
  (typeof dataPriorityEnum)[keyof typeof dataPriorityEnum];

/**
 * @description Todo リストの取得に成功
 */
export type GetTodos200 = {
  /**
   * @type array
   */
  data: {
    /**
     * @description Todo の一意識別子
     * @type string
     */
    id: string;
    /**
     * @description Todo のタイトル（必須）
     * @minLength 1
     * @maxLength 200
     * @type string
     */
    title: string;
    /**
     * @description Todo の詳細説明（任意）
     * @maxLength 1000
     * @type string
     */
    description?: string | null;
    /**
     * @description Todo の完了状態
     * @type string
     */
    status: DataStatusEnum;
    /**
     * @description Todo の優先度
     * @type string
     */
    priority: DataPriorityEnum;
    /**
     * @description 関連するカテゴリの ID（任意）
     * @type string
     */
    category_id?: string | null;
    /**
     * @description 期限日時（ISO 8601形式、任意）
     * @type string, date-time
     */
    due_date?: Date | null;
    /**
     * @description 作成日時（ISO 8601形式）
     * @type string, date-time
     */
    created_at: Date;
    /**
     * @description 最終更新日時（ISO 8601形式）
     * @type string, date-time
     */
    updated_at: Date;
  }[];
  /**
   * @description ページネーション情報
   * @type object
   */
  pagination: {
    /**
     * @description 現在のページ番号
     * @minLength 1
     * @type integer
     */
    page: number;
    /**
     * @description 1ページあたりの件数
     * @minLength 1
     * @type integer
     */
    limit: number;
    /**
     * @description 総件数
     * @minLength 0
     * @type integer
     */
    total: number;
    /**
     * @description 総ページ数
     * @minLength 0
     * @type integer
     */
    total_pages: number;
  };
};

/**
 * @description リクエストが不正です
 */
export type GetTodos400 = {
  /**
   * @type object
   */
  error: {
    /**
     * @description エラーコード
     * @type string
     */
    code: string;
    /**
     * @description エラーメッセージ
     * @type string
     */
    message: string;
    /**
     * @description 詳細なエラー情報（バリデーションエラー時など）
     * @type array | undefined
     */
    details?: {
      /**
       * @description エラーが発生したフィールド名
       * @type string
       */
      field: string;
      /**
       * @description フィールド固有のエラーメッセージ
       * @type string
       */
      message: string;
    }[];
  };
};

/**
 * @description 認証が必要です
 */
export type GetTodos401 = {
  /**
   * @type object
   */
  error: {
    /**
     * @description エラーコード
     * @type string
     */
    code: string;
    /**
     * @description エラーメッセージ
     * @type string
     */
    message: string;
    /**
     * @description 詳細なエラー情報（バリデーションエラー時など）
     * @type array | undefined
     */
    details?: {
      /**
       * @description エラーが発生したフィールド名
       * @type string
       */
      field: string;
      /**
       * @description フィールド固有のエラーメッセージ
       * @type string
       */
      message: string;
    }[];
  };
};

/**
 * @description サーバー内部エラー
 */
export type GetTodos500 = {
  /**
   * @type object
   */
  error: {
    /**
     * @description エラーコード
     * @type string
     */
    code: string;
    /**
     * @description エラーメッセージ
     * @type string
     */
    message: string;
    /**
     * @description 詳細なエラー情報（バリデーションエラー時など）
     * @type array | undefined
     */
    details?: {
      /**
       * @description エラーが発生したフィールド名
       * @type string
       */
      field: string;
      /**
       * @description フィールド固有のエラーメッセージ
       * @type string
       */
      message: string;
    }[];
  };
};

export type GetTodosQueryResponse = GetTodos200;

export type GetTodosQuery = {
  Response: GetTodos200;
  QueryParams: GetTodosQueryParams;
  Errors: GetTodos400 | GetTodos401 | GetTodos500;
};
