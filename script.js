//your JS code here. If required.
function updateTextAfterDelay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Example usage
const outputElement = document.getElementById("output");

updateTextAfterDelay()
  .then((text) => {
    outputElement.textContent = text;
  })
  .catch((error) => {
    console.log(error);
  });

