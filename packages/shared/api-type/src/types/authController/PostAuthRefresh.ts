/**
 * @description トークンの更新に成功
 */
export type PostAuthRefresh200 = {
  /**
   * @description 新しいアクセストークン
   * @type string
   */
  access_token: string;
  /**
   * @type string
   */
  token_type: string;
  /**
   * @description トークンの有効期限（秒）
   * @type integer
   */
  expires_in: number;
};

/**
 * @description リクエストが不正です
 */
export type PostAuthRefresh400 = {
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
 * @description 無効なリフレッシュトークン
 */
export type PostAuthRefresh401 = {
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
export type PostAuthRefresh500 = {
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

export type PostAuthRefreshMutationRequest = {
  /**
   * @description リフレッシュトークン
   * @type string
   */
  refresh_token: string;
};

export type PostAuthRefreshMutationResponse = PostAuthRefresh200;

export type PostAuthRefreshMutation = {
  Response: PostAuthRefresh200;
  Request: PostAuthRefreshMutationRequest;
  Errors: PostAuthRefresh400 | PostAuthRefresh401 | PostAuthRefresh500;
};
