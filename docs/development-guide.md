# 開発ガイドライン

## 概要

このドキュメントは、プロジェクトでの開発を効率的かつ一貫性を保って進めるためのガイドラインをまとめています。

## 開発環境セットアップ

### 必要な環境

- **Node.js**: >= 18.0.0
- **pnpm**: >= 9.0.0（パッケージマネージャー）
- **VSCode**: 推奨エディタ

### 初期セットアップ

```bash
# リポジトリのクローン
git clone <repository-url>
cd frontend-template

# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

### VSCode設定

推奨拡張機能は `.vscode/extensions.json` で管理されています。VSCodeを開くと自動で推奨拡張機能のインストールが提案されます。

## コーディング規約

### TypeScript

```typescript
// ✅ Good: 明確な型定義
interface UserProps {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// ✅ Good: 関数の型定義
const createUser = (userData: Omit<UserProps, 'id'>): UserProps => {
  return {
    id: Date.now(),
    ...userData,
  };
};

// ❌ Bad: any型の使用
const processData = (data: any) => {
  // any型は避ける
};
```

### Reactコンポーネント

```typescript
// ✅ Good: 関数コンポーネント + TypeScript
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// ❌ Bad: デフォルトエクスポート（名前付きエクスポートを推奨）
export default Button;
```

### ファイル・ディレクトリ命名

```
// ✅ Good: React コンポーネント
Button.tsx
UserProfile.tsx
NavigationHeader.tsx

// ✅ Good: ユーティリティ・フック
formatDate.ts
useAuth.ts
apiClient.ts

// ✅ Good: 設定ファイル
next.config.js
eslint.config.js
vitest.config.ts

// ✅ Good: ディレクトリ
components/
utils/
hooks/
config/

// ❌ Bad: 一貫性のない命名
button.tsx  // コンポーネントはPascalCase
FormatDate.ts  // ユーティリティはcamelCase
```

## Feature-Sliced Design ルール

Feature-Sliced Design の詳細なアーキテクチャ設計と依存関係ルールについては、[アーキテクチャについて](./about-architecture.md) を参照してください。

### レイヤー間の依存関係

```typescript
// ✅ Good: 下位レイヤーへの依存
// features/auth/ui/LoginForm.tsx
import { Button } from '@repo/shared-ui';
import { User } from '@repo/entities/user';

// ❌ Bad: 上位レイヤーへの依存
// shared/ui/Button.tsx
import { useAuth } from '@repo/features/auth'; // NG: sharedからfeaturesに依存

// ❌ Bad: 同一レイヤー内の依存
// features/auth/ui/LoginForm.tsx
import { SearchBar } from '@repo/features/search'; // NG: feature間の依存
```

### セグメント構造

```
packages/features/auth/
├── api/          # API呼び出し
├── ui/           # UIコンポーネント
├── model/        # 状態管理・ビジネスロジック
├── lib/          # ヘルパー関数
└── index.ts      # パブリックAPI
```

## コミット規約

### コミットメッセージ形式

```bash
# 基本形式
<type>(<scope>): <description>

# 例
feat(ui): add Button component
fix(auth): resolve login validation issue
docs(readme): update setup instructions
refactor(utils): improve date formatting function
test(button): add unit tests for Button component
```

### Type一覧

- **feat**: 新機能
- **fix**: バグ修正
- **docs**: ドキュメント
- **style**: フォーマット（機能に影響なし）
- **refactor**: リファクタリング
- **test**: テスト追加・修正
- **chore**: その他（依存関係更新など）

### Scope例

- **ui**: UIコンポーネント
- **auth**: 認証機能
- **api**: API関連
- **config**: 設定ファイル
- **docs**: ドキュメント

## ブランチ戦略

### ブランチ命名

```bash
# 機能開発
feature/add-user-authentication
feature/implement-search-filter

# バグ修正
fix/login-validation-error
fix/navigation-mobile-layout

# ドキュメント
docs/update-api-specification
docs/add-development-guide

# リファクタリング
refactor/extract-common-utilities
refactor/improve-component-structure
```

### ワークフロー

```bash
# 1. 最新のmainブランチを取得
git checkout main
git pull origin main

# 2. 新しいブランチを作成
git checkout -b feature/new-feature

# 3. 変更をコミット
git add .
git commit -m "feat(ui): add new component"

# 4. プッシュしてPR作成
git push origin feature/new-feature
```

## テスト戦略

### 単体テスト

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### E2Eテスト

```typescript
// login.spec.ts
import { test, expect } from '@playwright/test';

test('ユーザーログイン', async ({ page }) => {
  await page.goto('/login');
  
  await page.fill('[data-testid="email"]', 'user@example.com');
  await page.fill('[data-testid="password"]', 'password123');
  
  await page.click('[data-testid="login-button"]');
  
  await expect(page).toHaveURL('/dashboard');
});
```

## パフォーマンス ガイドライン

### バンドルサイズ最適化

```typescript
// ✅ Good: 必要な部分のみインポート
import { format } from 'date-fns';

// ❌ Bad: ライブラリ全体をインポート
import * as dateFns from 'date-fns';

// ✅ Good: 動的インポート
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

// ✅ Good: コード分割
const HomePage = React.lazy(() => 
  import('./pages/HomePage').then(module => ({ default: module.HomePage }))
);
```

### レンダリング最適化

```typescript
// ✅ Good: useMemo for expensive calculations
const ExpensiveComponent = ({ data }: { data: any[] }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveProcessing(item));
  }, [data]);

  return <div>{/* render processedData */}</div>;
};

// ✅ Good: useCallback for stable references
const ParentComponent = () => {
  const handleClick = useCallback((id: string) => {
    // handle click
  }, []);

  return <ChildComponent onClick={handleClick} />;
};
```

## セキュリティ ガイドライン

### XSS対策

```typescript
// ✅ Good: サニタイズされた出力
const UserMessage = ({ message }: { message: string }) => {
  return <p>{message}</p>; // Reactが自動的にエスケープ
};

// ❌ Bad: 生のHTML
const UserMessage = ({ htmlMessage }: { htmlMessage: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlMessage }} />;
};
```

### 環境変数

```typescript
// ✅ Good: 公開可能な環境変数
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// ❌ Bad: 秘密情報のクライアント側での使用
const secretKey = process.env.SECRET_API_KEY; // サーバーサイドでのみ使用
```

## トラブルシューティング

### よくある問題

#### 1. 依存関係エラー

```bash
# 問題: パッケージが見つからない
# 解決: 依存関係の再インストール
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### 2. 型エラー

```bash
# 問題: TypeScript型エラー
# 解決: 型チェック実行
pnpm check-types

# 型定義の更新
pnpm add -D @types/package-name
```

#### 3. ビルドエラー

```bash
# 問題: Turboキャッシュの問題
# 解決: キャッシュクリア
pnpm turbo clean

# 完全なリビルド
pnpm build --force
```

## コードレビュー ガイドライン

### レビュー観点

1. **機能性**: 要件を満たしているか
2. **可読性**: コードが理解しやすいか
3. **保守性**: 将来の変更に対応しやすいか
4. **パフォーマンス**: 性能上の問題はないか
5. **セキュリティ**: セキュリティ上の問題はないか
6. **テスト**: 適切にテストされているか

### レビューコメント例

```typescript
// ✅ Good: 建設的なフィードバック
// 提案: useMemoを使用してパフォーマンスを改善できそうです
const processedData = useMemo(() => expensiveCalculation(data), [data]);

// 質問: この関数の戻り値の型を明示的に定義した方が良いでしょうか？

// 賞賛: エラーハンドリングが適切に実装されていて素晴らしいです！
```

## リリース手順

### バージョニング

```bash
# パッチリリース (1.0.0 -> 1.0.1)
pnpm changeset add
pnpm changeset version
pnpm changeset publish

# マイナーリリース (1.0.0 -> 1.1.0)
# メジャーリリース (1.0.0 -> 2.0.0)
```

### デプロイメント

```bash
# ステージング環境
pnpm build
pnpm deploy:staging

# 本番環境
pnpm deploy:production
```

## 追加リソース

- [Feature-Sliced Design公式ドキュメント](https://feature-sliced.design/)
- [React公式ドキュメント](https://react.dev/)
- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)
- [pnpm公式ドキュメント](https://pnpm.io/)
- [Turborepo公式ドキュメント](https://turbo.build/repo/docs) 
