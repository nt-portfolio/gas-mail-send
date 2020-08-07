# 会員様のお誕生日に「おめでとうGメール」を発送するシステム

## License
GNU General Public License, Version 3.0
https://www.gnu.org/licenses/gpl-3.0.html

### Overview
Googleの提供するサービスを利用した、小規模店舗運営の低コストシステムの提案をイメージしたもので、
Google Apps Scrip（GAS）を使用して、会員様のお誕生日当日に「おめでとうGメール」を発送します。

### Features
- claspを利用し、開発はローカルでも行える
- スプレッドシートの会員名簿の誕生日列に基づいて、おめでとうメールをGメールで送信する
- メール本文のテンプレート（Googleドキュメント）とバースデーケーキ画像はGoogle Driveから取得する
- メール本文や会員名簿は非プログラマの運用スタッフでも修正ができる

### Future work
- 会員様がメールを正しく受信したか？の確認を取れるようにする
- 店舗スタッフによる運用をアシストするGUIのヘルパーを作成する
- Googleカレンダーに営業日や会社記念日等を登録し、連携させる

### Notice
- 会員名簿の情報はすべて架空のものです

### Acknowledgments
- テスト用データ作成 from: http://hogehoge.tk/personal/generator/
- ケーキ画像 from: https://illustimage.com/?id=1041