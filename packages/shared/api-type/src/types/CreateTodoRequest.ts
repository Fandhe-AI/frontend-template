export const createTodoRequestPriorityEnum = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type CreateTodoRequestPriorityEnum =
  (typeof createTodoRequestPriorityEnum)[keyof typeof createTodoRequestPriorityEnum];

/**
 * @description Todo 作成時のリクエストボディ
 */
export type CreateTodoRequest = {
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
  priority?: CreateTodoRequestPriorityEnum;
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
