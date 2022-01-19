# Electronテンプレート

これは、株式会社エスツーのa doc勉強会用に作成されたElectronテンプレートです。

## 1. ダウンロード

ダウンロードには2つの方法があります。

[テンプレートのZIPはこちらからダウンロードできます。](https://github.com/s2-co-ltd/benkyoukai/raw/main/downloads/session_2_electron_electron_template.zip)

または、gitを使用することもできます。

```bash
git clone git@github.com:s2-co-ltd/electron-builder-template.git
```

## 2. nodeモジュールをインストール

ダウンロードしたままで、必要なnodeモジュールがインストるされていません。`package.json`と言うファイルには、インストールする必要なモジュールがリストされているので、`npm install`だけでインストールできます。

ターミナルでは、プロジェクトと同じフォルダーには、下記のコマンドを実行します。
```bash
npm install
```

## 3. `package.json` の修正

`package.json`には、プロジェクトの情報が書いてありますので、プロジェクトに合わせて内容を編集してください。

「name」をプロジェクトの名前（英数字のローマ字であること）、「description」をプロジェクトの簡単あ説明（日本語でも可）、「productName」をアプリケーション名（日本語でも可）、「author 」をご自身の名前（日本語でも可）に変更します。

## 4. ソースを用意

アプリを実行する時には、`/src/renderer/index.html`を表示します。ですの、`index.html` を編集するか、使いたいウェブサイトをコピーして `src/renderer` フォルダに貼り付けてください。ルートHTMLファイルが `index.html`でない場合は、`src / main.js`を編集して、使用するファイルを指定します。

## 5. 開発のための実行

開発する時には、アプリを試してみたいなら、下記のコマンドを実行します。

```bash
npm run start
```

## 6. アイコン

アイコンファイルは、`icons/icon.png`にあります。解像度が512x512ピクセルのpngファイルであれば、どのようなものでも使用可能です。

## 7. ビルド

ビルドコマンドは、ビルドしたい環境に応じて異なります。ビルドすると、出来上がったファイルは `dist` フォルダに格納される。

### Windows

以下のコマンドで、Windowsにアプリをインストールするためのインストーラーが用意されます。

```bash
npm run build:windows
```

Windows版を（インストーラーを使わずに）1つの実行ファイルにビルドしたい場合は、以下のコマンドを実行してください。

```bash
npm run build:windows:portable
```

### Mac

```bash
npm run build:mac
```

### Linux

```bash
npm run build:linux
```