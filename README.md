# CWDTWebsite｜澄叡數位科技官網

澄叡數位科技股份有限公司的單頁形象網站，使用 React、TypeScript 與 Vite，支援桌面與手機瀏覽，並透過 GitHub Actions 部署至 GitHub Pages。

## 網站內容

- 品牌介紹與公司資訊。
- 五大解決方案：智慧製造（MES）、智慧排程（APS）、智慧能源（EMS）、工業 AI、數位整合。
- 四步導入路徑：設備連線、透明可視、數據分析、智慧最佳化。
- 聯絡人、Email 與電話資訊。

## 本機開發

Node.js 需求：20.19+（20.x）或 22.12+。npm 隨 Node.js 安裝。

在專案根目錄執行：

```powershell
npm ci
npm run dev
```

依終端機顯示的網址開啟網站，預設為 `http://localhost:5173/`。`npm ci` 使用已提交的 `package-lock.json` 安裝依賴。

| 指令 | 用途 |
| --- | --- |
| `npm run dev` | 啟動開發伺服器 |
| `npm run build` | 執行 TypeScript 編譯並產生正式版至 `dist/` |
| `npm run preview` | 預覽已建置的正式版 |
| `npm run lint` | 使用 Oxlint 檢查程式碼 |

## 專案結構

```text
.github/workflows/deploy-pages.yml  GitHub Pages 部署流程
public/                           Logo、favicon 與插畫
src/components/                   網站各區塊元件
src/content/siteContent.ts        文案、導覽、圖片路徑與聯絡資訊
src/styles/tokens.css             色彩、字體與共用間距
src/styles/site.css               網站版型與響應式樣式
src/App.tsx                       首頁區塊組合
index.html                        網站標題、SEO 描述與 favicon
vite.config.ts                    Vite 與部署路徑設定
```

## 維護文案與圖片

文案集中於 `src/content/siteContent.ts`。網站標題與搜尋摘要請同步更新 `index.html`。

| 使用位置 | 圖片檔案 |
| --- | --- |
| 頁首、頁尾符號 Logo | `public/cwdt-logo-symbol.png` |
| 關於我們完整品牌圖 | `public/cwdt-brand-full.png` |
| 瀏覽器圖示 | `public/favicon.ico` |
| 桌面版方案總覽 | `public/solutions-overview-3d.png` |
| 手機版方案總覽 | `public/solutions/integration.png` |
| 五張方案卡片 | `public/solutions/*-flat.svg` |

新增圖片時，放入 `public/`，並在內容設定中使用 `import.meta.env.BASE_URL` 組合路徑，以相容 GitHub Pages 的 repository 子路徑。Logo 保留原始比例。

文案來源為 `CWDT_簡報模板_淺色版_v3.pptx`，以第 5 頁五大解決方案為核心，搭配第 1、12 頁品牌內容、第 9 頁導入路徑與第 13 頁聯絡資訊。

3D 插畫為方案示意，使用內建 imagegen 製作；總覽圖採藍白等角設備、雲端與企業工作站，以發光網路線串接。扁平 SVG 為簡化的方案圖形。其他舊版圖片保留為備用素材。

## GitHub Pages 部署

### 1. 建立 GitHub repository

建立空的 repository。若本機已有 README 與 `.gitignore`，建立時不要再次加入這兩個檔案。

### 2. 連線並上傳

在專案根目錄執行以下指令，先替換 repository 網址。適用於本機已有 Git repository、`main` 分支且尚未設定 `origin` 的情況：

```powershell
git add .
git commit -m "Update CWDT website"
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPOSITORY.git
git push -u origin main
```

若已有 `origin`，先用 `git remote -v` 確認網址。若工作目錄沒有新變更，可略過 commit。

### 3. 啟用 Pages

1. 進入 repository 的 **Settings → Pages**。
2. 在 **Build and deployment → Source** 選擇 **GitHub Actions**。
3. 到 **Actions → Deploy to GitHub Pages → Run workflow**，選擇 `main` 並執行。
4. 部署完成後，在 **Settings → Pages** 查看正式網址。

之後每次推送至 `main`，都會自動安裝依賴、建置並部署 `dist/`。不需要將 `dist/` 或 `node_modules/` 提交到 Git。

一般 repository 網址格式為 `https://YOUR_ACCOUNT.github.io/YOUR_REPOSITORY/`。目前 Vite 設定 `base: './'`，使用相對資產路徑。

若部署失敗，查看 Actions 中失敗步驟的紀錄；若圖片或樣式沒有載入，確認資產路徑及檔名大小寫。

## 自訂網域

GitHub Pages 網址正常運作後，在 **Settings → Pages → Custom domain** 設定公司網域，再依 GitHub 指示設定 DNS。DNS 檢查及憑證完成後，啟用 **Enforce HTTPS**。

- [GitHub Pages 發佈來源設定](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [自訂網域與 DNS 設定](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Git 忽略規則

`.gitignore` 排除依賴、建置輸出、快取、日誌、環境變數檔與本機編輯器檔案；`package-lock.json`、網站程式碼、公開圖片、README 與部署流程保留在版本控制中。環境變數範本（例如 `.env.example`）可提交，但範本內不應填入實際密碼或金鑰。
