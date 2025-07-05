export type PatchTodosTodoidTogglePathParams = {
  /**
   * @description Todo の一意識別子
   * @type string
   */
  todoId: string;
};

export const patchTodosTodoidToggle200StatusEnum = {
  pending: "pending",
  completed: "completed",
} as const;

export type PatchTodosTodoidToggle200StatusEnum =
  (typeof patchTodosTodoidToggle200StatusEnum)[keyof typeof patchTodosTodoidToggle200StatusEnum];

export const patchTodosTodoidToggle200PriorityEnum = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type PatchTodosTodoidToggle200PriorityEnum =
  (typeof patchTodosTodoidToggle200PriorityEnum)[keyof typeof patchTodosTodoidToggle200PriorityEnum];

/**
 * @description 完了状態の切り替えに成功
 */
export type PatchTodosTodoidToggle200 = {
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
  status: PatchTodosTodoidToggle200StatusEnum;
  /**
   * @description Todo の優先度
   * @type string
   */
  priority: PatchTodosTodoidToggle200PriorityEnum;
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
 * @description 認証が必要です
 */
export type PatchTodosTodoidToggle401 = {
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
export type PatchTodosTodoidToggle404 = {
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
export type PatchTodosTodoidToggle500 = {
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

export type PatchTodosTodoidToggleMutationResponse = PatchTodosTodoidToggle200;

export type PatchTodosTodoidToggleMutation = {
  Response: PatchTodosTodoidToggle200;
  PathParams: PatchTodosTodoidTogglePathParams;
  Errors:
    | PatchTodosTodoidToggle401
    | PatchTodosTodoidToggle404
    | PatchTodosTodoidToggle500;
};
