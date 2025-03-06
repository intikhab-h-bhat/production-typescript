
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
           val.map((v)=>{
                console.log(v);
           })
            
        }else if(typeof val==="string"){
            console.log(val);
        }
    }

}


interface User{
    name:string;
    age:number;
}
interface Admin{
    name:string;
    age:string;
    isAdmin:boolean;
}

// in operator for narrowing
function isAdminAccount(account:User|Admin){
    
   if("isAdmin" in account){
       return account.isAdmin;
   }
    
}

// instanceof operator for narrowing
function check(x:Date|string){

    if(x  instanceof Date){
        return x.getHours();
    }
    return x.toUpperCase();
}

console.log(check(new Date()));


// custom type guard for narrowing
type Fish={
    swim:()=>void;}
type Bird={
    fly:()=>void;}


function move(pet:Fish|Bird): pet is Bird{
    
    return (pet as Fish).swim() !== undefined;
 
}

function getFood(pet:Fish|Bird){
    if(move(pet)){
        pet
        return "Fish Food";
    }
    return "Bird Food";
}