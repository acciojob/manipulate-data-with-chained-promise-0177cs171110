function manipulateData(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  });
}

function filterOutOddNumbers(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredArr = arr.filter((num) => num % 2 === 0);
      resolve(filteredArr);
    }, 1000);
  });
}

function multiplyEvenNumbers(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const multipliedArr = arr.map((num) => (num % 2 === 0 ? num * 2 : num));
      resolve(multipliedArr);
    }, 2000);
  });
}

const inputArray = [1, 2, 3, 4];

manipulateData(inputArray)
  .then(filterOutOddNumbers)
  .then(multiplyEvenNumbers)
  .then((resultArray) => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = resultArray.join(", ");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
