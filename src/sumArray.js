function sumArray(arr) {
  let sum = 0;

  for (const num of arr) {
    if (typeof num === "number") {
      sum += num;
    }
  }

  return sum;
}

const inputArray = [1, 2, 3, 4, 5];
const result = sumArray(inputArray);
console.log(result);
