import type { User } from "./User";

/**
 * @description 認証成功時のレスポンス
 */
export type AuthResponse = {
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
  user: User;
};
