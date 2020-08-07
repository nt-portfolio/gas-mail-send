/**
 * 入力された真偽値に基づいて会員ステータスを返す
 * @param {number} num (0 or 1 or 2)
 * @return {string}
 */
const getStatus = (num) => {
  const words = ['', '休会中', '退会済み'];
  if (num == 0 || num == 1 || num == 2) {
    return words[num];
  }
};
