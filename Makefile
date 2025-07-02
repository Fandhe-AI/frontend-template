# セットアップ
# setup: setup-env setup-volta setup-pnpm setup-playwright setup-lefthook
setup: setup-env setup-volta setup-pnpm setup-lefthook

setup-env: ./apps/mock/.env ./apps/sample-nextjs/.env ./apps/sample-react-router/.env ./packages/shared/api-mock/.env

setup-volta: volta-setup volta-install

setup-pnpm:
	pnpm install

# setup-playwright:
# 	cd apps/storybook && pnpm exec playwright install --with-deps && cd ../..

setup-lefthook:
	pnpm exec lefthook install


# 環境変数ファイルの作成
./apps/mock/.env: ./apps/mock/.env.example
	@if [ ! -f $@ ]; then \
		cp ./apps/mock/.env.example $@; \
		echo "$@ を作成しました"; \
	elif [ ./apps/mock/.env.example -nt $@ ]; then \
		timestamp=$$(date +%Y%m%d-%H%M); \
		mv $@ $@.$$timestamp; \
		cp ./apps/mock/.env.example $@; \
		echo "$@ が古いため、$@.$$timestamp にバックアップし、新しい $@ を作成しました"; \
	fi

./apps/sample-nextjs/.env: ./apps/sample-nextjs/.env.example
	@if [ ! -f $@ ]; then \
		cp ./apps/sample-nextjs/.env.example $@; \
		echo "$@ を作成しました"; \
	elif [ ./apps/sample-nextjs/.env.example -nt $@ ]; then \
		timestamp=$$(date +%Y%m%d-%H%M); \
		mv $@ $@.$$timestamp; \
		cp ./apps/sample-nextjs/.env.example $@; \
		echo "$@ が古いため、$@.$$timestamp にバックアップし、新しい $@ を作成しました"; \
	fi

./apps/sample-react-router/.env: ./apps/sample-react-router/.env.example
	@if [ ! -f $@ ]; then \
		cp ./apps/sample-react-router/.env.example $@; \
		echo "$@ を作成しました"; \
	elif [ ./apps/sample-react-router/.env.example -nt $@ ]; then \
		timestamp=$$(date +%Y%m%d-%H%M); \
		mv $@ $@.$$timestamp; \
		cp ./apps/sample-react-router/.env.example $@; \
		echo "$@ が古いため、$@.$$timestamp にバックアップし、新しい $@ を作成しました"; \
	fi

./packages/shared/api-mock/.env: ./packages/shared/api-mock/.env.example
	@if [ ! -f $@ ]; then \
		cp ./packages/shared/api-mock/.env.example $@; \
		echo "$@ を作成しました"; \
	elif [ ./packages/shared/api-mock/.env.example -nt $@ ]; then \
		timestamp=$$(date +%Y%m%d-%H%M); \
		mv $@ $@.$$timestamp; \
		cp ./packages/shared/api-mock/.env.example $@; \
		echo "$@ が古いため、$@.$$timestamp にバックアップし、新しい $@ を作成しました"; \
	fi


# Volta について
volta-setup:
	@if ! command -v volta >/dev/null 2>&1; then \
		if command -v brew >/dev/null 2>&1; then \
			brew install volta; \
		else \
			curl https://get.volta.sh | bash; \
		fi; \
		volta setup; \
		echo "volta をインストールしました"; \
	else \
		echo "volta は既にインストールされています"; \
	fi

volta-install: volta-install-node volta-install-corepack

volta-install-node:
	volta install node

volta-install-corepack:
	volta install corepack

	corepack enable
	corepack enable pnpm
