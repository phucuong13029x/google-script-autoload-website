// Send Grap API
function sendteams(msg, path, data) {
  const url       = 'https://fapi-microsoft.vercel.app/microsoft' + path;
  const authenkey = '';
  const tokenkey  = '';
  const chatID    = '19:...@thread.v2';
  const headers   = {
    authenkey: authenkey,
    tokenkey: tokenkey
  }
  let payload = {};
  if (data) {
    payload = data;
  } else {
    payload = {
      message: '<b>Monitor Down Time Website:</b><br>' + msg,
      chatID: chatID,
      channelID: "",
      mentions: [],
      attachments: [],
      hostedContents: [],
      contentType: "html"
    }
  }

  const option = {
    method: 'POST',
    contentType: 'application/json',
    headers: headers,
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
    timeout: 30000
  }

  try {
    const res = UrlFetchApp.fetch(url, option);
    Logger.log(res);
  } catch (e) {
    Logger.log(e.message);
  }
}
