/**
 * 入力された漢字をふりがな、フリガナに変換する （goo labのAPIを使用する）
 * @param {string} output_type ("hiragana" or "katakana")
 * @param {string} sentence
 * @return {string}
 */
const phonetic = (output_type, sentence) => {
  let endpoint = 'https://labs.goo.ne.jp/api/hiragana';
  let payload = {
    app_id: GOO_LAB_ID,
    sentence: sentence,
    output_type: output_type,
  };
  let options = {
    method: 'post',
    payload: payload,
  };

  let response = UrlFetchApp.fetch(endpoint, options);
  let response_json = JSON.parse(response.getContentText());
  return response_json.converted;
};
