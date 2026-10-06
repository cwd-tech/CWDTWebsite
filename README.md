# CWDT 澄叡公司官網

以 React、TypeScript 與 Vite 製作的單頁形象網站，預計部署於 GitHub Pages，並可在設定網域後使用自訂 DNS。

## 本機開發

需求：Node.js 20.19+ 或 22.12+。

```powershell
npm install
npm run dev
```

建立正式版並於本機預覽：

```powershell
npm run build
npm run preview
```

## GitHub Pages 部署

專案包含 GitHub Actions 部署流程。將此專案推送至 GitHub 後，在 repository 的 **Settings → Pages → Build and deployment** 選擇 **GitHub Actions**；往 `main` 分支推送變更時，工作流程會建立網站並部署至 Pages。

如果要使用自己的網域，先在 GitHub Pages 設定中填入網域，再依網域供應商的 DNS 設定說明建立對應記錄。網站尚未綁定網域，網域與 DNS 記錄請在確定正式網址後再填入。

## 更新文案

首頁文案、導覽項目、服務卡片、案例卡片與聯絡資訊集中在 `src/content/siteContent.ts`，正式文案準備好後可在該檔替換暫代內容。
