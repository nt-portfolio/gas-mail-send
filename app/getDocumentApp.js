/**
 * Googleドキュメントを取得する
 * @return {object}
 */
const getDocumentApp = () => {
  return DocumentApp.openByUrl(DOCUMENT_URL);
};
