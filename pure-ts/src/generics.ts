

let array1:Array<number> = [1,2,3,4,5];
let array2:Array<string> = ['a','b','c','d','e'];

function identityone(val:number):number{
    return val;
}

function identitytwo(val: string| boolean): string | boolean{
    return val;
}

function identitythree(val:any):any{
    return val;
}

//Generic function

function identityfour<Type>(val:Type):Type{
    return val;
}


interface superheros{
    name:string;
    power:string;
}


function identityfive<superheros>(val:superheros):superheros{
    return val;

}
   
console.log(identityfive({name:'Ironman',power:'suit'}));


function productSearch<T>(products:T[]):T{
    let product1 = 3;
    return products[3];
}
    
console.log(productSearch(["A","2","3","D","5"]));



const setProduct = <T>(prod:T[]) : T =>{


    return prod[0];
}
console.log(setProduct(["A","2","3","D","5"]));


interface Database{
    connection:string;
    username:string;
    password:string;
}


function anotherIdentity<T,U extends Database>(valu1:T,value2:U):object{

    return{
        valu1,value2
    }


    anotherIdentity(3,{"connection":"localhost","username":"root","password":"root"});

}


interface Quiz{
    name:string;
    type:string;
}
interface Course{
    name:string;
    author:string;
    subject:string;
}

class Products<T>{
    public products:T[]=[];
    
    addProduct(product:T){

        this.products.push(product);
    }

}