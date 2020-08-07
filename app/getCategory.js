/**
 * 入力された数値に基づいて会員カテゴリーを返す
 * @param {number} num (0 or 1 or 2)
 * @return {string}
 */
const getCategory = (num) => {
  const master = ['ゴールド', 'レギュラー', 'キッズ', ''];

  if (num == 0 || num == 1 || num == 2) {
    return master[num];
  } else {
    return master[master.length];
  }
};
