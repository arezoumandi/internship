function copy(arr) {
  let newNum = Object.assign({}, arr);
  const propNum = Object.getOwnPropertyNames(newNum);
  console.log("Primary object before change: " + arr);
  console.log("copy object: ");
  console.log(newNum);

  arr[0] = 200;
  console.log("Changed Primary object: " + arr);

  console.log("copy object after change: ");
  console.log(newNum);
}

copy();
