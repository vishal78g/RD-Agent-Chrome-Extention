chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "sendData") {
      fetch("http://localhost:8080/api/accounts/receive-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: message.data }),
      })
        .then((response) => response.json())
        .then((result) => console.log("Data sent to backend:", result))
        .catch((error) => console.log("Error sending data:", error));
    }
  });
  