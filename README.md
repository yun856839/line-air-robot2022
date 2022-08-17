# line-air-chatbot

使用 Node.js 與 Express 抓取政府公開資料 api，用 Line Messaging API 回傳所需資料

# 專案畫面

![首頁圖](https://github.com/yun856839/line-air-robot2022/blob/master/line-air-robot2022.png)

# 功能描述 (features)

- 輸入縣市地區 ( 依空氣品質監測站 ) 回傳空氣品質指標 AQI

# 環境建置與需求 (prerequisites)

- "axios": "^0.27.2",
- "dotenv": "^16.0.1",
- "express": "^4.18.1",
- "linebot": "^1.6.1"

# 安裝與執行步驟(installation and execution)

1. 打開終端機(Terminal)，Clone 此專案至本地電腦

```
git clone https://github.com/yun856839/line-air-robot2022.git
```

2. 開啟終端機，進入專案資料夾

```
cd line-air-robot2022
```

3. 安裝 npm 套件

```
npm install
```

4. LINE Developers 建立 Line Messaging API 專案

5. 把 .env.example 資料修改成已建立的 Line Messaging API 專案所需資料，並把名稱更改為 .env

6. 執行 server

```
npm run dev
```

7. 執行專案資料夾中 ngrok.exe 輸入

```
ngrok http 3000
```

8. 把網址(ngrok 中替代 localhost3000 的網址)輸入到傳案中 Webhook URL 上
