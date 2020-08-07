/**
 * Googleスプレッドシートを取得する
 * @return {object}
 */
const getSpreadsheetApp = (sheetName) => {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  return spreadsheet.getSheetByName(sheetName);
};
