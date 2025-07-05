# DevDiary

## 專案簡介

本專案為 Nuxt 3 + Prismic + Tailwind CSS + TypeScript 的 JAMstack 技術部落格，支援內容管理、動態路由、現代 UI 與自動部署。

---

## 安裝與啟動

```bash
npm install
npm run dev
```

---

## Prismic 與 Slice Machine 設定

1. 前往 [Prismic](https://prismic.io/) 建立 repository。
2. 建立 `post` custom type，欄位包含：`title`（Rich Text）、`cover_image`（Image）、`content`（Rich Text）、`created_at`（Date）。
3. 在專案根目錄建立 `.env` 檔案：
   ```
   NUXT_PRISMIC_ENDPOINT=https://你的-repo-name.cdn.prismic.io/api/v2
   ```
4. 安裝並啟用 Slice Machine：
   ```bash
   npx @slicemachine/init
   npx slicemachine
   ```
   設計與同步型別。

---

## 內容建立與同步

- 在 Prismic 後台建立並發佈文章，確保內容已發佈（不是草稿）。
- 若有新增或修改型別，記得在 Slice Machine UI 點擊「Push to Prismic」同步型別。

---

## Nuxt 頁面與資料串接

- `pages/blog/index.vue`：顯示所有文章列表。
- `pages/blog/[uid].vue`：根據 uid 顯示單篇文章內容。
- 首頁 `pages/index.vue`：引導使用者前往部落格。

---

## UI 客製化與區塊設計

- Header：現代感導覽列，包含網站標題與多個導覽連結。
- Hero Section：首頁頂部大圖區塊，強調主題、敘述與行動按鈕。
- Feature Section：介紹本站使用的技術（Nuxt 3、Prismic、Tailwind CSS、TypeScript）。
- Footer：藍色漸層底，加入社群連結與設計感。

---

## 常見錯誤排查與解決

- **Slice Machine UI 無法啟動**：確認安裝 `@slicemachine/init`，用 `npx slicemachine` 或 `npx @slicemachine/init` 啟動。
- **Vercel 部署錯誤：找不到 /slices**：建立 `slices/` 資料夾並加上 `.gitkeep`。
- **Vercel 部署錯誤：EISDIR: illegal operation on a directory, read**：刪除 `pages/slice-simulator.vue`。
- **Vue 單檔元件只能有一個 `<script setup>`**：合併重複的 `<script setup>` 區塊。
- **文章內容頁顯示異常**：
  - 確認 Prismic 型別、欄位名稱、UID、語言（lang）一致。
  - 若 `getByUID` 取不到資料，改用 `getAllByType` 過濾。
  - `content` 欄位請用 Rich Text 格式，程式碼加防呆處理。
- **Nuxt 路由無法正確跳轉**：
  - 路徑結構需為 `pages/blog/index.vue`（列表）與 `pages/blog/[uid].vue`（內容）。
  - 檔名需用半形中括號，並重啟 Nuxt。

---

## 專案路徑結構（最終）

```
vibeCodingBlog/
  components/
    Header.vue
    Footer.vue
    HeroSection.vue
    FeatureSection.vue
  pages/
    blog/
      [uid].vue
      index.vue
    index.vue
  public/
  slices/
  ...
```

---

## 心得與建議

- Nuxt 3 + Prismic 架構彈性高，內容管理與前端開發分離，適合現代 JAMstack 部落格。
- 路由結構、Prismic 型別、欄位名稱、語言（lang）需完全一致，否則容易踩坑。
- 遇到資料抓不到時，建議先 log API 回傳內容，再考慮用 `getAllByType` 過濾。
- UI/UX 可隨需求擴充，Tailwind CSS 開發效率高。

---

如需更多細節或遇到其他問題，歡迎參考本 README 或提出 issue 討論！

---

## 參考官方文件

- [Nuxt 官方文件](https://nuxt.com/docs/getting-started/introduction)
- [Prismic Nuxt 官方文件](https://prismic.nuxtjs.org/)
- [Slice Machine 官方文件](https://prismic.io/docs/slice-machine)
- [Tailwind CSS 官方文件](https://tailwindcss.com/docs/installation)
