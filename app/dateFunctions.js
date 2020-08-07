/**
 * 入力された日が営業日か？を判定する
 * @param {string} date
 */
const isBusinessDay = (date) => {
  // 土日か？
  if (date.getDay() == 0 || date.getDay() == 6) {
    return false;
  }
  // 日本の祝日カレンダーを取得する
  const calJa = CalendarApp.getCalendarById(
    'ja.japanese#holiday@group.v.calendar.google.com'
  );
  // 祝日か？
  if (calJa.getEventsForDay(date).length > 0) {
    return false;
  }
  return true;
};

/**
 * 入力された日が会員様の誕生日か？を判定する
 * @param {string} date
 */
const isBirthday = (date) => {
  const sheet = getSpreadsheetApp('会員マスタ');
  const startRow = 2;
  const lastRow = sheet.getLastRow();

  const target = [];
  for (let i = startRow; i <= lastRow; i++) {
    target[i] = sheet.getRange(cell.birthday + i).getValue();
    if (target[i] && date) {
      if (isSameDay(target[i], date)) return true;
    }
  }
  return false;
};

/**
 * 同じ月日か？を判定する
 * @param {string} date1
 * @param {string} date2
 */
const isSameDay = (date1, date2) => {
  const month1 = date1.getMonth() + 1;
  const day1 = date1.getDate();

  const month2 = date2.getMonth() + 1;
  const day2 = date2.getDate();

  return month1 === month2 && day1 === day2 ? true : false;
};

/**
 * 一年後の年月日を取得する
 * @param {object} now
 */
const getAfterOneYear = (now) => {
  now.setMonth(now.getMonth() + 12);
  //「年」を取得する
  const YYYY = now.getFullYear();
  //「月」を取得する
  const MM = now.getMonth() + 1;
  //「日」を取得する
  const DD = now.getDate();
  return `${YYYY}年${MM}月${DD}日`;
};
