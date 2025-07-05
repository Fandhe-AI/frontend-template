/**
 * @description ログイン時のリクエストボディ
 */
export type LoginRequest = {
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
