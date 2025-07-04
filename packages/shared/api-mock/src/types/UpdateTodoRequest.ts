export const updateTodoRequestStatusEnum = {
  pending: "pending",
  completed: "completed",
} as const;

export type UpdateTodoRequestStatusEnum =
  (typeof updateTodoRequestStatusEnum)[keyof typeof updateTodoRequestStatusEnum];

export const updateTodoRequestPriorityEnum = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type UpdateTodoRequestPriorityEnum =
  (typeof updateTodoRequestPriorityEnum)[keyof typeof updateTodoRequestPriorityEnum];

/**
 * @description Todo 更新時のリクエストボディ（部分更新対応）
 */
export type UpdateTodoRequest = {
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
  status?: UpdateTodoRequestStatusEnum;
  /**
   * @description Todo の優先度
   * @type string | undefined
   */
  priority?: UpdateTodoRequestPriorityEnum;
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
