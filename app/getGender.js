/**
 * 入力された真偽値に基づいて性別を返す
 * @param {number} num (0 or 1)
 * @return {string}
 */
const getGender = (num) => {
  const master = ['男', '女', ''];

  if (num == 0 || num == 1) {
    return master[num];
  } else {
    return master[2];
  }
};
