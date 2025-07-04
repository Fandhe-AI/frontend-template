/**
 * @description カテゴリの作成に成功
 */
export type PostCategories201 = {
  /**
   * @description カテゴリの一意識別子
   * @type string
   */
  id: string;
  /**
   * @description カテゴリ名
   * @minLength 1
   * @maxLength 50
   * @type string
   */
  name: string;
  /**
   * @description カテゴリの説明
   * @maxLength 200
   * @type string
   */
  description?: string | null;
  /**
   * @description カテゴリの表示色（HEXカラーコード）
   * @pattern ^#[0-9a-fA-F]{6}$
   * @type string
   */
  color: string;
  /**
   * @description 作成日時（ISO 8601形式）
   * @type string, date-time
   */
  created_at: Date;
};

/**
 * @description リクエストが不正です
 */
export type PostCategories400 = {
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
export type PostCategories401 = {
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
export type PostCategories422 = {
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
export type PostCategories500 = {
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

export type PostCategoriesMutationRequest = {
  /**
   * @description カテゴリ名（必須）
   * @minLength 1
   * @maxLength 50
   * @type string
   */
  name: string;
  /**
   * @description カテゴリの説明（任意）
   * @maxLength 200
   * @type string
   */
  description?: string | null;
  /**
   * @description カテゴリの表示色（HEXカラーコード、必須）
   * @pattern ^#[0-9a-fA-F]{6}$
   * @type string
   */
  color: string;
};

export type PostCategoriesMutationResponse = PostCategories201;

export type PostCategoriesMutation = {
  Response: PostCategories201;
  Request: PostCategoriesMutationRequest;
  Errors:
    | PostCategories400
    | PostCategories401
    | PostCategories422
    | PostCategories500;
};
