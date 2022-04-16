function isEmpty(a)
{
    let result;
    let type=typeof a;
    if (a === undefined)
    {
        result=true;

    }
    switch(type){
        case "string" :
            if (a.length===0 )
                result=true;
            else
                result=false;
            break;
         case "object" :
            prop= Object.getOwnPropertyNames(a);
            if (prop.length===0 || a.length===0){
                result=true;
             }else{
         
                 result=false;
             }
            break;
        case "boolean" :
            result=false;
            break;
        
    }

    console.log(result);
}

isEmpty("");
isEmpty({a:20});
isEmpty({});
isEmpty([]);
isEmpty(false);
isEmpty();