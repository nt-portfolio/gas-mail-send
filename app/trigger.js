/**
 * トリガーを作成する
 */
const setTrigger = () => {
  const time = new Date();
  time.setHours(1);
  time.setMinutes(10);
  if (time) {
    // トリガーを作成する
    ScriptApp.newTrigger('sendMail').timeBased().at(time).create();
  }
};

/**
 * トリガーを削除する
 */
const deleteTrigger = () => {
  // 現在のプロジェクトのすべてのトリガーを取得する
  const triggers = ScriptApp.getProjectTriggers();
  // 指定の関数名かどうかを判定する
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() == 'sendMail') {
      // トリガーを削除する
      ScriptApp.deleteTrigger(trigger);
    }
  }
};
