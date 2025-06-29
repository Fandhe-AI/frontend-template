# ディレクトリについて

## Feature-Sliced Design 導入計画

将来的には以下の構成への移行を計画しています：

```shell
frontend-template/
├── .cursor/            # Cursor設定（将来追加予定）
├── .github/            # GitHub設定（将来追加予定）
├── .vscode/            # VSCode設定
├── apps/               # Feature-Sliced Design: app層
│ ├── coverage/         # テストカバレッジ集約（将来追加予定）
│ ├── docs/             # ドキュメント生成アプリ
│ ├── mock/             # モックサーバー（将来追加予定）
│ ├── sample-react-router/ # React Router サンプル（将来追加予定）
│ ├── sample-nextjs/    # Next.js サンプル（将来追加予定）
│ └── storybook/        # UI Component ドキュメント（将来追加予定）
├── packages/           # Feature-Sliced Design: 各層
│ ├── pages/            # FSD: pages層（将来追加予定）
│ ├── widgets/          # FSD: widgets層（将来追加予定）
│ ├── features/         # FSD: features層（将来追加予定）
│ ├── entities/         # FSD: entities層（将来追加予定）
│ └── shared/           # FSD: shared層（将来拡張予定）
│   ├── api-client/     # API クライアント（将来追加予定）
│   ├── api-mock/       # API モック（将来追加予定）
│   ├── api-spec/       # OpenAPI 仕様（将来追加予定）
│   ├── api-type/       # API 型定義（将来追加予定）
│   ├── api-zod/        # API Zod スキーマ（将来追加予定）
│   ├── config-biome/   # Biome設定（将来追加予定）
│   ├── config-kubb/    # Kubb設定（将来追加予定）
│   ├── config-playwright/ # Playwright設定（将来追加予定）
│   ├── config-tailwind/   # Tailwind設定（将来追加予定）
│   ├── config-typescript/ # TypeScript設定
│   ├── config-vitest/     # Vitest設定（将来追加予定）
│   ├── config/         # 各種設定（将来追加予定）
│   ├── hooks/          # カスタムフック（将来追加予定）
│   ├── lib-dayjs/      # Day.js設定（将来追加予定）
│   ├── lib/            # ライブラリ（将来追加予定）
│   ├── locales/        # 国際化（将来追加予定）
│   ├── ui/             # 共通UIコンポーネント
│   └── utils/          # ユーティリティ（将来追加予定）
├── turbo/              # Turbo設定（将来追加予定）
├── docs/               # プロジェクトドキュメント
├── .cursorignore       # Cursor無視設定（将来追加予定）
├── .editorconfig       # エディタ設定（将来追加予定）
├── .env.example        # 環境変数例（将来追加予定）
├── .gitignore
├── .npmrc
├── .syncpackrc.yml     # パッケージ同期設定（将来追加予定）
├── biome.json          # Biome設定（将来追加予定）
├── commitlint.config.ts # コミットメッセージ規約（将来追加予定）
├── lefthook.yml        # Git hooks設定（将来追加予定）
├── LICENSE.txt         # ライセンス（将来追加予定）
├── Makefile            # Make設定（将来追加予定）
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json       # ルートTypeScript設定（将来追加予定）
└── turbo.json
```

## 現在の詳細構成

### .vscode/

VSCodeエディタの設定を管理します。

```shell
.vscode/
├── extensions.json    # 推奨拡張機能
├── settings.json      # エディタ設定
└── ...               # その他の設定ファイル
```

**用途:**
- プロジェクト固有のエディタ設定
- 推奨する拡張機能の定義
- デバッグ設定やタスク設定

### apps/ (現在の構成)

**Feature-Sliced Design** の **app** レイヤーに相当します。

```shell
apps/
├── docs/             # ドキュメント生成アプリ
│   ├── app/         # Next.jsアプリケーション
│   │   ├── favicon.ico
│   │   ├── fonts/   # フォントファイル
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.module.css
│   │   └── page.tsx
│   ├── public/      # 静的ファイル
│   ├── package.json # パッケージ設定
│   ├── next.config.js # Next.js設定
│   ├── tsconfig.json # TypeScript設定
│   ├── eslint.config.js # ESLint設定
│   └── README.md    # アプリ固有のドキュメント
└── web/             # メインWebアプリケーション
    ├── app/         # Next.jsアプリケーション
    │   ├── favicon.ico
    │   ├── fonts/   # フォントファイル
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.module.css
    │   └── page.tsx
    ├── public/      # 静的ファイル
    ├── package.json # パッケージ設定
    ├── next.config.js # Next.js設定
    ├── tsconfig.json # TypeScript設定
    ├── eslint.config.js # ESLint設定
    └── README.md    # アプリ固有のドキュメント
```

#### apps/docs/
- **目的**: プロジェクトドキュメントの生成と表示
- **技術**: Next.js (v15.3.0)
- **特徴**: TypeDocなどを利用したコードドキュメントの自動生成（将来実装予定）

#### apps/web/
- **目的**: メインのWebアプリケーション
- **技術**: Next.js (v15.3.0) + React (v19.1.0)
- **特徴**: 
  - Turbopackによる高速開発
  - TypeScript完全対応
  - 共通UIコンポーネントの利用

### packages/ (現在の構成)

```shell
packages/
├── typescript-config/ # TypeScript設定の共有
│   ├── base.json      # 基本設定
│   ├── nextjs.json    # Next.js用設定
│   ├── react-library.json # Reactライブラリ用設定
│   └── package.json   # パッケージ設定
└── ui/                # 共通UIコンポーネント
    ├── src/           # コンポーネント実装
    │   ├── button.tsx # ボタンコンポーネント
    │   ├── card.tsx   # カードコンポーネント
    │   └── code.tsx   # コードコンポーネント
    ├── turbo/         # Turbo Generators設定
    │   └── generators/
    │       ├── config.ts # ジェネレーター設定
    │       └── templates/ # テンプレート
    ├── package.json   # パッケージ設定
    ├── tsconfig.json  # TypeScript設定
    └── eslint.config.mjs # ESLint設定
```

#### packages/typescript-config/ (shared層)
- **目的**: TypeScript設定の統一と共有
- **現在の構成要素**:
  - `base.json`: 基本的なTypeScript設定
  - `nextjs.json`: Next.js用の最適化設定
  - `react-library.json`: Reactライブラリ開発用設定
- **使用方法**: 他のパッケージの `tsconfig.json` で継承

#### packages/ui/ (shared層)
- **目的**: 再利用可能なUIコンポーネントの提供
- **現在の特徴**:
  - TypeScript完全対応
  - 基本的なコンポーネント（Button, Card, Code）
  - Turbo Generatorsによるコンポーネント自動生成機能
- **使用方法**: 他のパッケージで `@repo/ui` として参照

### docs/

プロジェクト全体のドキュメントを管理します。

```shell
docs/
├── about-architecture.md  # アーキテクチャ説明
├── about-directory.md     # ディレクトリ構成説明
├── development-guide.md   # 開発ガイドライン
├── api-specification.md   # API仕様書
└── todo.md               # 開発タスク一覧
```

**現在の用途:**
- アーキテクチャ設計の説明
- ディレクトリ構成の説明
- 開発ガイドライン
- API仕様の計画
- 今後の実装タスク管理

## 移行計画

### 概要

Feature-Sliced Design への移行は5つのフェーズに分けて段階的に実施します：

1. **フェーズ1: 基盤整備** ✅ 完了
2. **フェーズ2: 開発環境の充実** 🚧 進行中
3. **フェーズ3: Feature-Sliced Design完全導入** 📋 計画中
4. **フェーズ4: API・データ管理** 📋 計画中
5. **フェーズ5: 品質・運用強化** 📋 計画中

詳細な移行計画とタスクリストは以下を参照してください：
- [アーキテクチャについて](./about-architecture.md) - 設計方針と技術的背景
- [TODO リスト](./todo.md) - 具体的な実装タスクと進捗管理

## 設定ファイル

主要な設定ファイルの詳細は [アーキテクチャについて](./about-architecture.md) を参照してください。

## ディレクトリ命名規則

### パッケージ命名
- **kebab-case** を使用（例: `config-biome`）
- 機能を明確に表現する名前
- 接頭辞による分類（例: `config-*`, `api-*`）

### ファイル命名
- **React コンポーネント**: PascalCase（例: `Button.tsx`）
- **設定ファイル**: kebab-case（例: `next.config.js`）
- **ユーティリティ**: camelCase（例: `formatDate.ts`）

## 開発フロー

開発環境のセットアップ、新しいパッケージの追加方法、ブランチ戦略などの詳細は [開発ガイドライン](./development-guide.md) を参照してください。

## ベストプラクティス

### 現在適用中
- **workspace:*** を使用した内部パッケージ参照
- Turboによる効率的なタスク実行
- TypeScriptによる型安全性
- ESLintによるコード品質管理

### 将来導入予定
- Dependency cruiserによるアーキテクチャ監視
- Biomeによる統一的なコード品質管理
- Vitestによる包括的なテスト
- Storybookによるコンポーネント管理
- 自動化されたCI/CDパイプライン
