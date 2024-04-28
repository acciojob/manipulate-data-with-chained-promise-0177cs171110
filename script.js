//your JS code here. If required.
function processData(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
  .then((arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = arr.filter(num => num % 2 === 0);
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .then((result) => {
    const outputElement = document.getElementById("output");
    outputElement.textContent = result.join(", ");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

// Usage example
const inputArray = [1, 2, 3, 4];
processData(inputArray);

