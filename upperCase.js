function upperCase(){
    let names=["Reza","ali","mina"];
    console.log("Before Cahnge :"+names)

    console.log("After Cahnge :");
    for(i=0;i<names.length;i++){
        names[i]=names[i].charAt(0).toUpperCase()+names[i].slice(1);
        console.log(names[i]+"  ");
    }
}

upperCase();