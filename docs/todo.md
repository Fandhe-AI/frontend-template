# TODO - 開発タスク一覧

## 概要

このドキュメントは、Feature-Sliced Design アーキテクチャへの移行と開発環境の充実に向けた今後のタスクをまとめています。

各フェーズは段階的に実装し、依存関係を考慮して進めてください。

## フェーズ1: 基盤整備 ✅

- [x] 基本的なモノレポ構成
- [x] Turborepo + pnpm設定
- [x] 共通設定パッケージ（eslint-config, typescript-config）
- [x] 基本UIコンポーネント（packages/ui）
- [x] アーキテクチャドキュメント作成
- [x] ディレクトリ構成ドキュメント作成

## フェーズ2: 開発環境の充実 ✅

### 高優先度

- [x] **Dependency cruiser導入**
  - [x] packages/shared/config-dependency-cruiser パッケージ作成
  - [x] .dependency-cruiser.js 設定ファイル作成
  - [x] Feature-Sliced Design依存関係ルール定義
  - [x] 循環依存チェック設定
  - [x] アーキテクチャ図の自動生成設定
  - [ ] CI/CDパイプラインに依存関係チェック組み込み

- [x] **Biome導入**
  - [x] biome.json設定ファイル作成
  - [x] packages/shared/config-biome パッケージ作成
  - [x] ESLint + Prettierからの移行
  - [x] 既存コードのフォーマット統一

### 中優先度

- [x] **Nextjs導入**
  - [x] apps/sample-nextjs アプリケーション作成

- [x] **React Router導入**
  - [x] apps/sample-react-router アプリケーション作成

### 低優先度

- [ ] **Storybook導入**
  - [ ] apps/storybook アプリケーション作成
  - [ ] 既存UIコンポーネントのStory作成
  - [ ] デザインシステムドキュメント化

- [ ] **Vitest導入**
  - [ ] packages/shared/config-vitest パッケージ作成
  - [ ] 基本的なテスト設定
  - [ ] UIコンポーネントの単体テスト
  - [ ] ユーティリティ関数のテスト

- [ ] **Playwright導入**
  - [ ] packages/shared/config-playwright パッケージ作成
  - [ ] E2Eテスト環境構築
  - [ ] 基本的なユーザーフローテスト

- [ ] **開発環境改善**
  - [x] .editorconfig追加
  - [x] .env.example作成
  - [ ] apps/coverage カバレッジ集約アプリ作成

- [ ] **エディタ設定充実**
  - [ ] .vscode/argv.json 詳細設定
  - [ ] .vscode/extensions.json 詳細設定
  - [ ] .vscode/launch.json デバッグ設定
  - [ ] .vscode/sample.code-snippets 詳細設定
  - [ ] .vscode/settings.json 詳細設定
  - [ ] .vscode/tasks.json タスク定義
  - [ ] .cursor/rules/ Cursor AI向けコーディングルール
  - [ ] .cursor/mcp.json MCP設定

## フェーズ3: Feature-Sliced Design完全導入 📋

### packages/pages 層

- [ ] **ページレイヤー作成**
  - [ ] packages/pages ディレクトリ作成
  - [ ] package.json設定
  - [ ] ページコンポーネントの基本構造
  - [ ] ルーティング管理の分離
  - [ ] Dependency cruiserでのレイヤー検証

### packages/widgets 層

- [ ] **ウィジェットレイヤー作成**
  - [ ] packages/widgets ディレクトリ作成
  - [ ] Header, Footer, Sidebar コンポーネント
  - [ ] Navigation コンポーネント
  - [ ] レイアウト関連コンポーネント
  - [ ] Dependency cruiserでの依存関係検証

### packages/features 層

- [ ] **フィーチャーレイヤー作成**
  - [ ] packages/features ディレクトリ作成
  - [ ] 認証機能（auth-feature）
  - [ ] 検索機能（search-feature）
  - [ ] フィルタリング機能（filter-feature）
  - [ ] Feature間の依存関係禁止ルール適用

### packages/entities 層

- [ ] **エンティティレイヤー作成**
  - [ ] packages/entities ディレクトリ作成
  - [ ] User エンティティ
  - [ ] データモデル定義
  - [ ] ビジネスルール実装
  - [ ] Dependency cruiserでのエンティティ検証

## フェーズ4: API・データ管理 🔌

### OpenAPI・型安全性

- [x] **API仕様設計**
  - [x] packages/shared/api-spec ディレクトリ作成
  - [x] OpenAPI 3.0仕様書作成
  - [x] API エンドポイント設計

- [x] **Kubb導入**
  - [x] packages/shared/config-kubb パッケージ作成
  - [x] packages/shared/api-client 自動生成設定
  - [x] packages/shared/api-type 自動生成設定
  - [x] packages/shared/api-zod 自動生成設定
  - [x] packages/shared/api-mock 自動生成設定

### モック・開発環境

- [x] **モックサーバー**
  - [x] apps/mock アプリケーション作成
  - [x] packages/shared/api-mock 自動生成設定
  - [x] 開発用ダミーデータ作成

## フェーズ5: 品質・運用強化 ⚙️

### CI/CD

- [ ] **GitHub設定**
  - [ ] .github/workflows ディレクトリ作成
  - [ ] CI パイプライン（lint, test, build, dependency-check）
  - [ ] CD パイプライン（自動デプロイ）
  - [ ] PR テンプレート作成
  - [ ] Issue テンプレート作成
  - [ ] Dependency cruiser チェックの自動化

### 開発品質

- [x] **Git hooks**
  - [x] lefthook.yml作成
  - [x] commitlint.config.ts作成
  - [x] pre-commit hooks設定（dependency-cruiser含む）
  - [x] commit message規約

- [ ] **依存関係管理**
  - [ ] .syncpackrc.yml作成
  - [ ] renovate.json設定（dependabot代替）
  - [ ] 定期的な依存関係更新
  - [ ] Dependency cruiserレポートの定期生成

### 追加設定

- [ ] **プロジェクト設定**
  - [ ] LICENSE.txt追加
  - [x] Makefile作成（開発コマンド集約）
  - [ ] tsconfig.json（ルート設定）

## 追加開発タスク 🎯

### アーキテクチャ可視化・検証

- [x] **Dependency cruiser 高度活用**
  - [x] アーキテクチャ図の自動生成とドキュメント化
  - [x] 依存関係メトリクスの収集
  - [x] 技術負債の可視化
  - [x] Feature-Sliced Design適合度の定期レポート
  - [ ] カスタムルールの作成（プロジェクト固有制約）

### UI/UX改善

- [ ] **Tailwind CSS導入**
  - [x] packages/shared/config-tailwind パッケージ作成
  - [x] デザインシステム統一
  - [ ] 既存コンポーネントの移行

- [ ] **追加UIコンポーネント**
  - [ ] Form コンポーネント群
  - [ ] Modal, Dialog コンポーネント
  - [ ] Table, List コンポーネント
  - [ ] Loading, Error コンポーネント

### ユーティリティ・ライブラリ

- [ ] **共通ライブラリ拡張**
  - [ ] packages/shared/utils ユーティリティ関数
  - [ ] packages/shared/hooks カスタムフック
  - [ ] packages/shared/lib-dayjs 日時ライブラリ
  - [ ] packages/shared/locales 国際化対応

### サンプルアプリケーション

- [ ] **サンプル実装**
  - [ ] apps/sample-nextjs 完全版サンプル
  - [ ] apps/sample-react-router ルーター比較用
  - [ ] 各レイヤーの実装例

## パフォーマンス・セキュリティ 🔒

### パフォーマンス最適化

- [ ] **分析・最適化**
  - [ ] webpack-bundle-analyzer導入
  - [ ] Core Web Vitals監視
  - [ ] 画像最適化設定
  - [ ] Code Splitting最適化

### セキュリティ強化

- [ ] **セキュリティ対策**
  - [ ] Content Security Policy設定
  - [ ] 認証システム実装
  - [ ] HTTPS設定（本番環境）
  - [ ] 定期的なセキュリティ監査

## 監視・運用 📊

### 監視システム

- [ ] **エラー・パフォーマンス監視**
  - [ ] Sentry導入（エラー監視）
  - [ ] Analytics導入
  - [ ] ログシステム構築
  - [ ] アラート設定

### アーキテクチャ監視

- [ ] **依存関係監視**
  - [ ] Dependency cruiser定期実行の自動化
  - [ ] アーキテクチャ違反アラート設定
  - [ ] 依存関係変更の履歴管理
  - [ ] チーム向けアーキテクチャレポート生成

## 進捗管理

### 現在の状況
- フェーズ1: ✅ 完了
- フェーズ2: ✅ 完了（高優先度タスク）
- フェーズ3-5: 📋 計画中

### 実装済み機能
- **Dependency cruiser**: Feature-Sliced Design アーキテクチャの依存関係チェック
- **Biome v2**: 高速なlintとフォーマット（ESLint/Prettier置き換え）
- **Storybook**: UIコンポーネントのドキュメント化とテスト

### 注意事項
- 各タスクは依存関係を考慮して順次実装
- 実装前に設計レビューを実施
- テストケースを必ず作成
- ドキュメントの更新を忘れずに
- Dependency cruiserでアーキテクチャ適合性を継続的にチェック

### 関連ドキュメント
- [アーキテクチャについて](./about-architecture.md)
- [ディレクトリについて](./about-directory.md)
- [開発ガイドライン](./development-guide.md)
- [API仕様書](./api-specification.md)
