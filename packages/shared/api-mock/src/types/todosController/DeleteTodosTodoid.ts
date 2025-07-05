export type DeleteTodosTodoidPathParams = {
  /**
   * @description Todo の一意識別子
   * @type string
   */
  todoId: string;
};

/**
 * @description Todo の削除に成功
 */
export type DeleteTodosTodoid204 = {
  /**
   * @description 成功フラグ
   * @type boolean
   */
  success: boolean;
  /**
   * @description 成功メッセージ
   * @type string | undefined
   */
  message?: string;
};

/**
 * @description 認証が必要です
 */
export type DeleteTodosTodoid401 = {
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
export type DeleteTodosTodoid404 = {
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
export type DeleteTodosTodoid500 = {
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

export type DeleteTodosTodoidMutationResponse = DeleteTodosTodoid204;

export type DeleteTodosTodoidMutation = {
  Response: DeleteTodosTodoid204;
  PathParams: DeleteTodosTodoidPathParams;
  Errors: DeleteTodosTodoid401 | DeleteTodosTodoid404 | DeleteTodosTodoid500;
};
