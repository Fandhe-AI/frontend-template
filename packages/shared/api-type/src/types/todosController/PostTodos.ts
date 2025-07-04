export const postTodos201StatusEnum = {
  pending: "pending",
  completed: "completed",
} as const;

export type PostTodos201StatusEnum =
  (typeof postTodos201StatusEnum)[keyof typeof postTodos201StatusEnum];

export const postTodos201PriorityEnum = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type PostTodos201PriorityEnum =
  (typeof postTodos201PriorityEnum)[keyof typeof postTodos201PriorityEnum];

/**
 * @description Todo の作成に成功
 */
export type PostTodos201 = {
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
  status: PostTodos201StatusEnum;
  /**
   * @description Todo の優先度
   * @type string
   */
  priority: PostTodos201PriorityEnum;
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
};

/**
 * @description リクエストが不正です
 */
export type PostTodos400 = {
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
export type PostTodos401 = {
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
 * @description バリデーションエラー
 */
export type PostTodos422 = {
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
export type PostTodos500 = {
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

export const postTodosMutationRequestPriorityEnum = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type PostTodosMutationRequestPriorityEnum =
  (typeof postTodosMutationRequestPriorityEnum)[keyof typeof postTodosMutationRequestPriorityEnum];

export type PostTodosMutationRequest = {
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
   * @description Todo の優先度（デフォルト: medium）
   * @default "medium"
   * @type string | undefined
   */
  priority?: PostTodosMutationRequestPriorityEnum;
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
};

export type PostTodosMutationResponse = PostTodos201;

export type PostTodosMutation = {
  Response: PostTodos201;
  Request: PostTodosMutationRequest;
  Errors: PostTodos400 | PostTodos401 | PostTodos422 | PostTodos500;
};
