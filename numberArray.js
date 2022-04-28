function numArray(num) {
  let sum = 0;
  for (i = 0; i < num.length; i++) {
      if (typeof num[i] == "number")
      {
          sum += num[i];
      }
  }
  return sum;
}

console.log(numArray([1,2,10,20,30]));
console.log(numArray([]));
console.log(numArray(["ali","rezaa"]))