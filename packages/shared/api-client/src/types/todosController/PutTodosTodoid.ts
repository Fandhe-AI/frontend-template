export type PutTodosTodoidPathParams = {
  /**
   * @description Todo の一意識別子
   * @type string
   */
  todoId: string;
};

export const putTodosTodoid200StatusEnum = {
  pending: "pending",
  completed: "completed",
} as const;

export type PutTodosTodoid200StatusEnum =
  (typeof putTodosTodoid200StatusEnum)[keyof typeof putTodosTodoid200StatusEnum];

export const putTodosTodoid200PriorityEnum = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type PutTodosTodoid200PriorityEnum =
  (typeof putTodosTodoid200PriorityEnum)[keyof typeof putTodosTodoid200PriorityEnum];

/**
 * @description Todo の更新に成功
 */
export type PutTodosTodoid200 = {
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
  status: PutTodosTodoid200StatusEnum;
  /**
   * @description Todo の優先度
   * @type string
   */
  priority: PutTodosTodoid200PriorityEnum;
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
export type PutTodosTodoid400 = {
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
export type PutTodosTodoid401 = {
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
 * @description リソースが見つかりません
 */
export type PutTodosTodoid404 = {
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
export type PutTodosTodoid422 = {
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
export type PutTodosTodoid500 = {
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

export const putTodosTodoidMutationRequestStatusEnum = {
  pending: "pending",
  completed: "completed",
} as const;

export type PutTodosTodoidMutationRequestStatusEnum =
  (typeof putTodosTodoidMutationRequestStatusEnum)[keyof typeof putTodosTodoidMutationRequestStatusEnum];

export const putTodosTodoidMutationRequestPriorityEnum = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type PutTodosTodoidMutationRequestPriorityEnum =
  (typeof putTodosTodoidMutationRequestPriorityEnum)[keyof typeof putTodosTodoidMutationRequestPriorityEnum];

export type PutTodosTodoidMutationRequest = {
  /**
   * @description Todo のタイトル
   * @minLength 1
   * @maxLength 200
   * @type string | undefined
   */
  title?: string;
  /**
   * @description Todo の詳細説明
   * @maxLength 1000
   * @type string
   */
  description?: string | null;
  /**
   * @description Todo の完了状態
   * @type string | undefined
   */
  status?: PutTodosTodoidMutationRequestStatusEnum;
  /**
   * @description Todo の優先度
   * @type string | undefined
   */
  priority?: PutTodosTodoidMutationRequestPriorityEnum;
  /**
   * @description 関連するカテゴリの ID
   * @type string
   */
  category_id?: string | null;
  /**
   * @description 期限日時（ISO 8601形式）
   * @type string, date-time
   */
  due_date?: Date | null;
};

export type PutTodosTodoidMutationResponse = PutTodosTodoid200;

export type PutTodosTodoidMutation = {
  Response: PutTodosTodoid200;
  Request: PutTodosTodoidMutationRequest;
  PathParams: PutTodosTodoidPathParams;
  Errors:
    | PutTodosTodoid400
    | PutTodosTodoid401
    | PutTodosTodoid404
    | PutTodosTodoid422
    | PutTodosTodoid500;
};
