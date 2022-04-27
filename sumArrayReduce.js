function sumArr(arr) {
  let initialValue = 0;

  var sum = arr.reduce(function (total, item) {
    return total + item;
  }, initialValue);
  return sum;
}
console.log(sumArr([10, 20, 30, 40, 50]));
console.log(sumArr([]));
console.log(sumArr([10]));
