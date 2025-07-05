/**
 * @description ユーザー情報
 */
export type User = {
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
