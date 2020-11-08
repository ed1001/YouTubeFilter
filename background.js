chrome.history.onVisited.addListener((history) => {
  if (history.url.startsWith("https://www.youtube.com/")) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      console.log(currentTab);
      if (currentTab.status === "complete") {
        chrome.tabs.sendMessage(currentTab.id, {message: "asdas"}, function (response) {});
      }
    });
  }
});
