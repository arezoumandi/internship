function sortArray(num) {
  for (i = 0; i < num.length; i++) {
    for (j = 0; j < num.length - i - 1; j++) {
      if (num[j + 1] < num[j]) {
        [num[j + 1], num[j]] = [num[j], num[j + 1]];
      }
    }
  }
return num;
}

console.log(sortArray());
