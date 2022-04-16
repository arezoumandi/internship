function numArray(){
    let num=[10,20,30,40,7,459,];
    let sum=0;
    for (i=0;i<num.length;i++)
    {
        sum+=num[i];
    }
   
    console.log(num);
    console.log("sum of numbers ="+sum);
}


numArray();