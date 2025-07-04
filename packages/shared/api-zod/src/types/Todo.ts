export const todoStatusEnum = {
  pending: "pending",
  completed: "completed",
} as const;

export type TodoStatusEnum =
  (typeof todoStatusEnum)[keyof typeof todoStatusEnum];

export const todoPriorityEnum = {
  low: "low",
  medium: "medium",
  high: "high",
} as const;

export type TodoPriorityEnum =
  (typeof todoPriorityEnum)[keyof typeof todoPriorityEnum];

/**
 * @description Todo アイテムを表現するオブジェクト
 */
export type Todo = {
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
  status: TodoStatusEnum;
  /**
   * @description Todo の優先度
   * @type string
   */
  priority: TodoPriorityEnum;
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
