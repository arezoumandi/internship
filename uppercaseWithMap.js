function upperCase(strArr){

    let uppercae=strArr.map(item=>item.charAt(0).toUpperCase()+item.slice(1));
    return uppercae;


}

console.log(upperCase(["ali","reza","REZA"]));
console.log(upperCase(["ali"]));
console.log(upperCase([]));
