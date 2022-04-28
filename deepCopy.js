function copy(obj1) {

    obj2=JSON.parse( JSON.stringify(obj1));
    return obj2;
}


let a=[1,2,3];
b=copy(a);
a=[2,4,3];
console.log(`copy object=${b}`);


let c={name:"ali",
      address:{
        city:"qom",
        st:"Attaran"
      },

};

d=copy(c);
c.address.city='Tehran';
console.log(c);
console.log(d);