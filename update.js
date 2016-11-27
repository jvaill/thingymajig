var sendMsg = () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello", query: document.getElementById('query').value}, function(response) {
      alert(response.farewell);
    });
  });
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', sendMsg);
});
