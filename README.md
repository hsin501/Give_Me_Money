# 給我錢算帳網

## 描述

這是一個基於 React 的網站應用程式，旨在幫助使用者計算並追蹤誰欠誰錢。用戶可以輕鬆地新增好友、輸入帳單金額並計算分帳。此應用特別適合在朋友聚會、共同支付等情境下使用，讓費用分配更加方便。

## 功能特點

- **顯示朋友列表**：列出所有朋友及其餘額。
- **新增好友**：用戶可以添加好友，並分配他們的圖片和名稱。
- **計算分帳**：根據輸入的帳單金額和各自支付的金額，自動計算並顯示誰欠誰錢。
- **顯示餘額**：清楚顯示每個好友的當前餘額，讓用戶一目了然誰欠了誰多少錢。

## 安裝指南

1. 克隆此儲存庫至本地：
   ```bash
   git clone https://github.com/hsin501/Give-Me-Money.git
   ```
2. 進入專案目錄並安裝依賴：
   ```bash
   npm install
   ```
3. 啟動開發伺服器：
   ```bash
   npm start
   ```

## 使用說明

1. 在首頁你會看到已有的好友列表及他們的餘額狀態。
2. 點擊「新增好友」按鈕可新增新的好友。
3. 選擇好友後，可以輸入帳單金額和分帳信息，計算出各自的費用並更新餘額。
4. 餘額會自動根據你選擇的付款人進行調整，顯示誰欠誰多少錢。

## 範例

- 當你與好友 Clark 吃飯後，你支付了所有費用，你可以使用此應用來記錄這筆交易並顯示 Clark 欠你多少錢。

## 檔案結構
 ```bash
.
├── public/               # 公共資源 (靜態資源，如圖片等)
├── src/
│   ├── App.js            # 主要計算組件
│   ├── index.css         # 全域樣式和主要計算組件樣式
│   ├── footer.js         # Footer組件
│   ├── footer.css        # Footer樣式
│   ├── header.css        # Header樣式
│   └── header.js         # Header組件
└── package.json          # npm 專案設定檔

 ```
## 組件
`App`：主要應用程式組件，管理應用狀態並渲染其他組件。  

`FriendsList`：顯示朋友列表的組件。  

`Friend`：顯示單個朋友的詳細資訊。  

`FormAddFriend`：用於添加新朋友的表單組件。  

`FormSplitBill`：用於計算分帳的表單組件。  

`Button`：簡單的按鈕組件。

## 使用技術
- React
- JavaScript
- CSS
- HTML
