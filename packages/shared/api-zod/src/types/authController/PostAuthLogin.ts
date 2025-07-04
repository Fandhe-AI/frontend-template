/**
 * @description ログインに成功
 */
export type PostAuthLogin200 = {
  /**
   * @description アクセストークン（JWT）
   * @type string
   */
  access_token: string;
  /**
   * @description リフレッシュトークン
   * @type string
   */
  refresh_token: string;
  /**
   * @description トークンタイプ
   * @type string
   */
  token_type: string;
  /**
   * @description アクセストークンの有効期限（秒）
   * @type integer
   */
  expires_in: number;
  /**
   * @description ユーザー情報
   * @type object
   */
  user: {
    /**
     * @description ユーザーの一意識別子
     * @type string
     */
    id: string;
    /**
     * @description ユーザーのメールアドレス
     * @type string, email
     */
    email: string;
    /**
     * @description ユーザー名
     * @type string
     */
    name: string;
    /**
     * @description アカウント作成日時
     * @type string, date-time
     */
    created_at: Date;
  };
};

/**
 * @description リクエストが不正です
 */
export type PostAuthLogin400 = {
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
 * @description 認証に失敗
 */
export type PostAuthLogin401 = {
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
export type PostAuthLogin500 = {
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

export type PostAuthLoginMutationRequest = {
  /**
   * @description ユーザーのメールアドレス
   * @type string, email
   */
  email: string;
  /**
   * @description ユーザーのパスワード
   * @minLength 8
   * @type string
   */
  password: string;
};

export type PostAuthLoginMutationResponse = PostAuthLogin200;

export type PostAuthLoginMutation = {
  Response: PostAuthLogin200;
  Request: PostAuthLoginMutationRequest;
  Errors: PostAuthLogin400 | PostAuthLogin401 | PostAuthLogin500;
};
