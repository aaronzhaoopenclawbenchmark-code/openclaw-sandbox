// Utility functions

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

async function processItems(items) {
  return items.map(item => item.toString());
}

module.exports = { fetchData, processItems };
