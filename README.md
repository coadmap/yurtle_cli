# YurtleClient

Coadmapのサービス開発チャレンジの「Yurtle」のフロント用の完成見本。
ビギナを対象にした技術スタックのみで作っている。

## 推奨環境
* Node: v16.13.0
* npm : v8.1.3
* 対象OS: Ubuntu, MacOS

## dotenvについて
`.env`ファイルはローカル用につくっています。
本番環境用にbuildするときは個々が作った本番環境に合わせて`.env.production`を作って編集してください

### 最低限設定する必要がある環境変数
* REACT_APP_API_ORIGIN: https://xxxxx.comなど、APIサーバーを起動しているoriginの情報を入れてください

## 使い方
1. .env.exampleファイルをコピーして.envファイルを作成
2. `npm install`: 依存パッケージのインストール
3. ([Yurtle API doc](https://github.com/coadmap/yurtle_spec)をgit cloneして`npm install && npm mock:start`: 必要があれば、モックサーバーの起動)
   1. REACT_APP_API_ORIGINにCoadmapが提供しているSandbox APIを利用してもオッケーです
4. `npm start`: アプリケーションの起動
