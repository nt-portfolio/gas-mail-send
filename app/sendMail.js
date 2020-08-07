/**
 * Gメールを送信する
 */
const sendMail = () => {
  const doc = getDocumentApp();
  const docText = doc.getBody().getText();
  const sheet = getSpreadsheetApp('会員マスタ');
  const startRow = 2;
  const lastRow = sheet.getLastRow();

  // Google DriveからフォルダIDとファイル名で、ファイルを取得する
  const folder = DriveApp.getFolderById(IMG_FOLDER_ID);
  const img = folder.getFilesByName('happy_birthday.png').next();

  let body = [];
  let memberName = [];
  let recipient = [];
  let birthday = [];

  // メール件名
  const subject = 'お誕生日おめでとうございます！';
  const options = {
    name: STORE_NAME,
    attachments: [img],
  };

  // 現在の日時
  const now = new Date();

  for (let i = startRow; i <= lastRow; i++) {
    // 会員名
    memberName[i] = sheet.getRange(cell.name + i).getValue();
    // 送信先のメールアドレス
    recipient[i] = sheet.getRange(cell.email + i).getValue();
    // 生年月日
    birthday[i] = sheet.getRange(cell.birthday + i).getValue();

    // データが空でないか？
    if (memberName[i] && recipient[i] && birthday[i]) {
      // 今日が誕生日か？
      if (isSameDay(birthday[i], now)) {
        // メール本文
        body[i] = docText
          .replace(/\{\$\$\$storeName\$\$\$\}/g, STORE_NAME)
          .replace(/\{\$\$\$memberName\$\$\$\}/g, memberName[i])
          .replace(/\{\$\$\$deadline\$\$\$\}/g, getAfterOneYear(now));

        // メールを送信する
        GmailApp.sendEmail(recipient[i], subject, body[i], options);
      }
    }
  }

  // 古いトリガーを削除する
  deleteTrigger();
};
