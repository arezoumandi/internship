function copy(){
    const num=[1,2,3];
    let newNum=Object.assign({},num);          
    const propNum = Object.getOwnPropertyNames(newNum);
    console.log("Primary object before change: "+num)
    console.log("copy object: ");
    console.log(newNum);
    
    num[0]=200;           
 
    console.log("Changed Primary object: "+num);

    console.log("copy object after change: ");
    console.log(newNum);

}

copy();