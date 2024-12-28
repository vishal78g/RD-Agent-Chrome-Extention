scrapeData = () => {
  const rows = document.querySelectorAll("table tr");
  const data = [];
  rows.forEach((row) => {
      const cells = Array.from(row.querySelectorAll("td"))
          .slice(1) // Skip the first column
          .map(cell => cell.innerText);
      if (cells.length > 0) data.push(cells);
  });
  return data;
};

data = scrapeData();
chrome.runtime.sendMessage({ action: "sendData", data });
