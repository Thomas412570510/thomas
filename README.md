# 🛍️ Mochi Store (麻糬療癒系線上選物商城)

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: Active](https://img.shields.io/badge/Status-Completed-success.svg)]()

> 一個以療癒系居家小物為主題的輕量化電子商務購物網站，整合了 **前端互動式購物車**、**限時折扣倒數計時器**、**動態滿額行銷優惠** 以及 **Node.js Express + Nodemailer 訂單確認郵件自動發送服務**。

---

## ✨ 核心特色功能 (Features)

1. 🧸 **精選商品櫥窗 (Curated Catalog)**
   - 包含多款療癒居家小物（迷你植物、香氛蠟燭、可愛手提袋等），支援即時「加入購物車」。
   - 卡片式響應式網格佈局（Responsive Grid），支援 Hover 懸浮縮放微互動。

2. 🛒 **即時購物車系統 (Real-time Shopping Cart)**
   - 支援商品數量增減（`+` / `-`）與單項刪除。
   - 使用瀏覽器 `LocalStorage` 進行狀態持久化，重新整理頁面購物車資料不遺失。
   - 即時計算總金額與單價連動。

3. ⏳ **促銷行銷引擎 (Promotion & Urgency Engine)**
   - **限時折扣倒數**：頁面頂部動態倒數計時，提升購買緊迫感。
   - **智慧滿額門檻提示**：根據購物車目前累積金額，動態計算「再買 NT$XXX 即可享滿額免運 / 滿額贈品」通知。

4. ✉️ **訂單確認自動發信 (Automated Email Dispatcher)**
   - 後端採用 Express.js 搭配 Nodemailer，支援串接 Gmail SMTP 發送信箱通知。
   - 結帳時自動彙整訂單清單與金額，發送確認明細信件予顧客。

---

## 🏗️ 專案目錄架構 (Architecture)

```text
thomas/
├── public/                     # 🌐 前端靜態資源目錄
│   ├── index.html              # 商城首頁 (商品櫥窗、購物車介面)
│   ├── styles.css              # 溫馨粉藍系風格樣式表
│   ├── script.js               # 購物車核心邏輯、計時器、金額計算
│   └── promotions.js           # 隨機促銷活動動態注入邏輯
├── index.js                    # 🚀 Express 伺服器主入口與 Email API
├── .env.example                # 🔐 環境變數範本檔 (Gmail SMTP 憑證)
├── .gitignore                  # Git 排除規則
├── package.json                # 專案相依性定義
└── README.md                   # 專案技術說明文件
```

---

## 🔌 API 規格 (API Endpoints)

### `POST /send-email`
發送訂單確認郵件至顧客電子信箱。

- **Request Body (JSON):**
  ```json
  {
    "customerEmail": "customer@example.com",
    "orderDetails": "商品1 x 2, 商品2 x 1",
    "totalPrice": 450
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "Email 發送成功"
  }
  ```

---

## 🚀 快速上手 (Quick Start)

### 1. 安裝環境與相依套件

```bash
# 複製專案
git clone https://github.com/Thomas412570510/thomas.git
cd thomas

# 安裝 Node.js 相依套件
npm install
```

### 2. 設定環境變數

複製 `.env.example` 為 `.env`，並設定您的 Gmail 應用程式密碼：

```bash
cp .env.example .env
```

```ini
PORT=3000
EMAIL_USERNAME=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
```

### 3. 啟動伺服器

```bash
# 開發模式 (含 nodemon 自動熱重載)
npm run dev

# 或一般啟動
npm start
```

瀏覽器打開 `http://localhost:3000` 即可開始體驗購物商城！

---

## 🛡️ 安全注意事項 (Security)

- 專案已將 `.env` 納入 `.gitignore`，請勿將真實之 Gmail 應用程式密碼簽入公開版本控制庫。
- 生產環境建議搭配環境變數注入工具（如 Railway, Render, Fly.io 等）。

---

## 📄 授權條款 (License)

本專案採用 [MIT License](LICENSE) 授權。