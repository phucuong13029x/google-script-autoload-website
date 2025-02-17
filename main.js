const urls = {
  "YSflex"  : "https://ysflex...",
  "YSwinner": "https://yswinner...",
  "YSfuture": "https://ysfuture...",
  "Yuanta"  : "https://yuanta...",
  "YSradar" : "https://ysradar..."
}

function loadData() {
  for (var key in urls) {
    if (urls.hasOwnProperty(key)) {
      ping(key, urls[key]);
    }
  }
}

// Ping website
function ping(name, url) {
  const options = {
    muteHttpExceptions: true,
    timeout: 60000
  };

  const startTime = new Date();
  try {
    const res = UrlFetchApp.fetch(url, options);
    const endTime = new Date();
    const totalTime = endTime - startTime;

    if (res.getResponseCode() == 200) {
      const text = `<a href="${url}">${name}</a> is <span style="color:green">up</span>.<br>Total time request: ${totalTime} ms`;
      Logger.log(text);
    } else {
      const text = `<a href="${url}">${name}</a> is <span style="color:red">down</span>.<br>Total time request: ${totalTime} ms.<br>Response Code: ${res.getResponseCode()}`;
      Logger.log(text);
      sendteams(text, '/chats/sendmessage');
    }
  } catch (e) {
    const endTime = new Date();
    const totalTime = endTime - startTime;
    const errorText = `<a href="${url}">${name}</a> is <span style="color:red">down</span>.<br>Total time request: ${totalTime} ms.<br>Error: ${e.message}`;
    Logger.log(errorText);
    sendteams(errorText, '/chats/sendmessage');
  }
}
