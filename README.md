# todo-list-sequelize-edition
採用 Node.js 和 Express 打造的todo list，使用者可以在此todo list中瀏覽、新增、修改與刪除「todo」，並設有登入機制可提供多人使用。

## 專案畫面
![註冊畫面](https://i.imgur.com/e0J1bUN.png)

![登入畫面](https://i.imgur.com/HqvlCdu.png)

![首頁畫面](https://i.imgur.com/rzagYN1.png)

![詳細資訊](https://i.imgur.com/DWsD4Bk.png)

## 功能描述 (features)
- 提供登入和註冊機制
- 登入後可以在導航列左側看到使用者名稱
- 在首頁一次瀏覽所有todo
- 新增一筆todo
- 編輯todo (一次只能編輯一筆)
- 刪除任何一筆todo (一次只能刪除一筆)

## 環境建置(prerequisites)
- Node.js v10.15.0
- Express v4.17.1
- Express-handlebars v5.2.0
- mongoose v5.11.8
- body-parser v1.19.0
- method-override v3.0.0
- bcryptjs v2.4.3
- connect-flash v0.1.1
- dotenv v8.2.0
- express-session v1.17.1
- passport v0.4.1
- passport-facebook v3.0.0
- passport-local v1.0.0
- mysql2 v2.2.5
- sequelize v6.4.0
- sequelize-cli v6.2.0

## 資料庫(database)
- MySQL
- MySQL Workbench

## 安裝與執行步驟 (installation and execution)
- 提醒: 以下動作需使用 terminal 或 Git Bash 指令
1. 將專案cline到本地環境
   ```
   git clone https://github.com/jefflin-git/todo-list-sequelize-edition.git
   ```
2. 進入專案資料夾
   ```
   cd todo-sequelize
   ```
3. 至 package.json 檔案裝查看需安裝的npm套件，或使用以下指令安裝
   ```
   npm run install
   ```
4. 安裝 nodemon 套件
   - 提醒: 若先前在本地開發環境中以`npm install -g nodemon` 指令安裝過可跳至下步驟
5. 在MySQL Workbench中建立資料庫
   ```
    drop database if exists todo_sequelize;
    create database todo_sequelize;
    use todo_sequelize;
    ```
6. 將應用程式與資料庫同步
   ```
   npx sequelize db:migrate
   ```
7. 匯入種子資料
    ```
    npx sequelize db:seed:all
    ```
8. 在MySQL Workbench中確認種子資料是否建立成功
   ```
    select * from todos;
    select * from users;
    ```
9. 啟動伺服器，執行 app.js 檔案
   - 使用 `nodemon app.js` 或 `npm run dev` 執行
   - 看到回應 `Express is listening on localhost:3000  at Time: (當地時間)` 代表成功執行
10. 開啟任一瀏覽器瀏覽器輸入 http://localhost:3000 開始使用
11. 使用預設帳號登入:
    ```
     email: 'root@example.com'
     password: '12345678'
    ```
## 專案開發人員 (contributor)
> [Jeff Lin](https://github.com/jefflin-git)