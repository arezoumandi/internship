function upperCase(strArr){

    let uppercae=strArr.map(item=>item.charAt(0).toUpperCase()+item.slice(1));

    console.log(uppercae)


}

upperCase(["ali","reza","REZA"]);
upperCase(["ali"])
upperCase([])
