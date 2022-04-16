function emailCheck(email){
  
    let pattern=/^[a-zA-Z0-9]+@{1}[a-zA-Z]+\.{1}[a-zA-Z]/;
    console.log(pattern.test(email));
}


emailCheck("fasfd@afasfd.codddm")
emailCheck("@afasfd.codddm")
emailCheck("fasfd@@afasfd.codddm")
emailCheck("_fasfd@@afasfd.codddm")