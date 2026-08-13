// Google Apps Script — Kalpana Chip interest list
// Sheet columns: A Sl. No | B Name | C Email ID | D Organization

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Sl. No', 'Name', 'Email ID', 'Organization']);
    }

    var sl = sheet.getLastRow(); // header is row 1, so this gives 1,2,3...
    sheet.appendRow([sl, data.name, data.email, data.org]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
