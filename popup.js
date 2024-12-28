document.getElementById("fetchData").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content.js"],
      });
    });
  });


document.getElementById("goToAllAccounts").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["Accounts.js"],
        });
    });
});
  