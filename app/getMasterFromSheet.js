/**
 * マスタシートからデータを取得し、配列を作成して返す
 * @param {object} sheet
 * @return {array}
 */
const getMasterFromSheet = (sheetName) => {
  let master = [];
  const startRow = 0;

  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(sheetName);
  const lastRow = sheet.getLastRow();

  for (let i = startRow; i <= lastRow; i++) {
    if (sheet.getRange(cell.rowNum + i).getValue() != '###EOF###') {
      master[i - 1] = sheet.getRange(cell.rowNum + i).getValue();
    }
  }

  return master;
};
