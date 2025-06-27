# API仕様書

## 概要

このドキュメントは、プロジェクトで使用するAPIの仕様をまとめています。

現在は計画段階であり、フェーズ4でOpenAPI仕様として正式に実装予定です。

## API設計原則

### RESTful設計

- **リソース中心**: URLはリソースを表現
- **HTTPメソッド**: 操作を適切に使い分け
- **ステータスコード**: 適切なレスポンスコード
- **統一性**: 一貫したAPI設計

### 型安全性

- **OpenAPI 3.0**: API仕様の標準化
- **Kubb**: TypeScript型の自動生成
- **Zod**: ランタイム型検証

## 基本設定

### ベースURL

```
# 開発環境
https://api.dev.example.com/v1

# ステージング環境
https://api.staging.example.com/v1

# 本番環境
https://api.example.com/v1
```

### 認証

```http
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

### レスポンス形式

```typescript
// 成功レスポンス
interface SuccessResponse<T> {
  success: true;
  data: T;
  meta?: {
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

// エラーレスポンス
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}
```

## エンドポイント仕様（計画）

### 認証 (Authentication)

#### POST /auth/login
ユーザーログイン

```typescript
// Request
interface LoginRequest {
  email: string;
  password: string;
}

// Response
interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}
```

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### POST /auth/refresh
トークンリフレッシュ

```typescript
// Request
interface RefreshRequest {
  refreshToken: string;
}

// Response
interface RefreshResponse {
  token: string;
  refreshToken: string;
}
```

#### POST /auth/logout
ログアウト

```http
POST /auth/logout
Authorization: Bearer <token>
```

### ユーザー管理 (Users)

#### GET /users/me
現在のユーザー情報取得

```typescript
// Response
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}
```

#### PUT /users/me
ユーザー情報更新

```typescript
// Request
interface UpdateUserRequest {
  name?: string;
  avatar?: string;
}
```

#### GET /users
ユーザー一覧取得（管理者のみ）

```typescript
// Query Parameters
interface UsersQuery {
  page?: number;
  limit?: number;
  search?: string;
  role?: 'admin' | 'user';
}

// Response
interface UsersResponse {
  users: User[];
}
```

### コンテンツ管理（例）

#### GET /posts
投稿一覧取得

```typescript
// Query Parameters
interface PostsQuery {
  page?: number;
  limit?: number;
  category?: string;
  tag?: string;
  search?: string;
  sort?: 'created_at' | 'updated_at' | 'title';
  order?: 'asc' | 'desc';
}

// Response
interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  author: User;
  category: Category;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
}
```

#### POST /posts
投稿作成

```typescript
// Request
interface CreatePostRequest {
  title: string;
  content: string;
  excerpt?: string;
  slug?: string;
  status?: 'draft' | 'published';
  categoryId: string;
  tagIds?: string[];
}
```

#### GET /posts/:id
投稿詳細取得

#### PUT /posts/:id
投稿更新

#### DELETE /posts/:id
投稿削除

## エラーコード

### 認証エラー

| コード | メッセージ | 説明 |
|--------|------------|------|
| AUTH_001 | Invalid credentials | 認証情報が無効 |
| AUTH_002 | Token expired | トークンが期限切れ |
| AUTH_003 | Token invalid | トークンが無効 |
| AUTH_004 | Refresh token invalid | リフレッシュトークンが無効 |

### バリデーションエラー

| コード | メッセージ | 説明 |
|--------|------------|------|
| VALID_001 | Required field missing | 必須フィールドが不足 |
| VALID_002 | Invalid email format | メールアドレス形式が無効 |
| VALID_003 | Password too weak | パスワードが脆弱 |
| VALID_004 | Invalid field value | フィールド値が無効 |

### リソースエラー

| コード | メッセージ | 説明 |
|--------|------------|------|
| RES_001 | Resource not found | リソースが見つからない |
| RES_002 | Resource already exists | リソースが既に存在 |
| RES_003 | Resource access denied | リソースへのアクセス拒否 |

### システムエラー

| コード | メッセージ | 説明 |
|--------|------------|------|
| SYS_001 | Internal server error | 内部サーバーエラー |
| SYS_002 | Service unavailable | サービス利用不可 |
| SYS_003 | Rate limit exceeded | レート制限超過 |

## 実装計画

### フェーズ4: API実装

API の詳細な実装計画とタスクは [TODO リスト](./todo.md) のフェーズ4を参照してください。

#### 主要コンポーネント

- **OpenAPI仕様書**: `packages/shared/api-spec/openapi.yaml`
- **Kubb設定**: `packages/shared/config-kubb/kubb.config.ts`
- **自動生成パッケージ**:
  - `packages/shared/api-client` - TypeScript API クライアント
  - `packages/shared/api-type` - TypeScript 型定義
  - `packages/shared/api-zod` - Zod バリデーションスキーマ
- **モックサーバー**: `apps/mock` - 開発用モックAPI

## セキュリティ考慮事項

### 認証・認可

- **JWT**: アクセストークンとリフレッシュトークン
- **HTTPS**: 通信の暗号化
- **CORS**: 適切なCORS設定
- **Rate Limiting**: API呼び出し制限

### データ保護

- **入力検証**: 全ての入力データの検証
- **SQLインジェクション対策**: パラメータ化クエリ
- **XSS対策**: 出力エスケープ
- **CSRF対策**: CSRFトークン

## パフォーマンス最適化

### キャッシュ戦略

- **HTTP Cache**: 適切なCache-Controlヘッダー
- **CDN**: 静的リソースの配信
- **Redis**: セッション・データキャッシュ

### データベース最適化

- **インデックス**: クエリ最適化
- **ページネーション**: 大量データの分割取得
- **N+1問題**: 効率的なクエリ

## 監視・ログ

### ログ形式

```json
{
  "timestamp": "2023-01-01T00:00:00Z",
  "level": "info",
  "service": "api",
  "method": "POST",
  "path": "/auth/login",
  "status": 200,
  "responseTime": 150,
  "userId": "user123",
  "userAgent": "Mozilla/5.0...",
  "ip": "192.168.1.1"
}
```

### メトリクス

- **レスポンス時間**: API呼び出しの性能
- **エラー率**: エラーの発生頻度
- **スループット**: 処理能力
- **可用性**: サービスの稼働率

## 今後の拡張

### GraphQL対応

- **Apollo Server**: GraphQLサーバー
- **スキーマ設計**: 型安全なクエリ
- **コードジェネレーション**: TypeScript型生成

### リアルタイム機能

- **WebSocket**: リアルタイム通信
- **Server-Sent Events**: プッシュ通知
- **Socket.io**: 双方向通信

### マイクロサービス化

- **サービス分割**: 機能別の分離
- **API Gateway**: 統一エンドポイント
- **サービスディスカバリー**: 動的サービス発見

## 関連ドキュメント

- [アーキテクチャについて](./about-architecture.md)
- [開発ガイドライン](./development-guide.md)
- [TODO リスト](./todo.md) 