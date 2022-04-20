function sum(arr)
{   
        let initialValue=0;
            
        var sum=arr.reduce(function(total,item){
            return  total+item;
        },initialValue)

        console.log("sum:"+ sum);

}


sum([10,20,30,40,50])
sum([])
sum([10])