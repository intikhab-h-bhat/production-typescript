
function detectType(val:number|string){

    if(typeof val==="string"){
        return val.toUpperCase();
    }
    return val+3;
}


function provideId(id:string|null){
  
    if(!id){
        return "No id provided";
    }
    return id;
}

console.log(provideId("Abc"));


function printAll(val:string|string[]|null){

    if(val){
        if(typeof val==="object"){
           val.forEach((v)=>{
                console.log(v);
           })
            
        }else if(typeof val==="string"){
            console.log(val);
        }
    }

}