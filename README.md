# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Prismic 設定
1. 前往 https://prismic.io/ 建立 repository。
2. 建立 `post` custom type，欄位包含 title、cover_image、content、created_at。
3. 在專案根目錄建立 `.env` 檔案，內容如下：

```
NUXT_PRISMIC_ENDPOINT=https://你的-repo-name.cdn.prismic.io/api/v2
```

## Tailwind CSS
已安裝 @nuxtjs/tailwindcss，樣式可直接於組件中使用。

## .env 設定
在專案根目錄建立 `.env` 檔案，內容如下：
```
NUXT_PRISMIC_ENDPOINT=https://你的-repo-name.cdn.prismic.io/api/v2
```

## Prismic 文件與 Slice Machine 設定
1. 前往 [Prismic](https://prismic.io/) 建立 repository。
2. 進入 Prismic 控制台，建立 `post` custom type，欄位包含：
   - `title`（Rich Text）
   - `cover_image`（Image）
   - `content`（Rich Text）
   - `created_at`（Date）
3. 安裝並啟用 Slice Machine：
   ```bash
   npx @slicemachine/init
   ```
   依照指示登入 Prismic 並連結 repository。
4. 本地開啟 Slice Builder：
   ```bash
   npx slicemachine
   ```
   可視覺化設計與同步 Slices。

## Prismic 預覽與部署
- 若需預覽草稿，請於 Prismic 後台設定 Preview，預覽網址填入 `http://localhost:3000/preview`。
- 部署至 Vercel 時，請於 Vercel 後台設定環境變數 `NUXT_PRISMIC_ENDPOINT`。

## 參考文件
- [Prismic Nuxt 官方文件](https://prismic.nuxtjs.org/)
- [Slice Machine 官方文件](https://prismic.io/docs/slice-machine)
- [Nuxt 部署教學](https://nuxt.com/docs/getting-started/deployment)
