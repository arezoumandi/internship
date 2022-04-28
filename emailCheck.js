function emailCheck(email){
  
    let pattern=/^[a-zA-Z0-9]+@{1}[a-zA-Z]+\.{1}[a-zA-Z]/;
   return(pattern.test(email));
}


console.log(emailCheck("fasfd@afasfd.codddm"));
console.log(emailCheck("@afasfd.codddm"));
console.log(emailCheck("fasfd@@afasfd.codddm"));
console.log(emailCheck("_fasfd@@afasfd.codddm"))