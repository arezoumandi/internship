function sortArray(num) {
  console.log("Unsorted :");
  console.log(num);

  for (i = 0; i < num.length; i++) {
    for (j = 0; j < num.length - i - 1; j++) {
      if (num[j + 1] < num[j]) {
        [num[j + 1], num[j]] = [num[j], num[j + 1]];
      }
    }
  }

  console.log("sorted :");
  console.log(num);
}
sortArray();
