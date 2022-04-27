function upperCase(names) {
  let result = [];
  for (i = 0; i < names.length; i++) {
    if (typeof names[i] == "string") {
      result[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
    } else {
      result[i] = names[i];
    }
  }
  return result;
}

console.log(upperCase(["reza", "ali"]));
console.log(upperCase(["Reza", "ali", "marYam"]));
console.log(upperCase([1, 2, 3]));
console.log(upperCase(["ali",1,"reza"]));
