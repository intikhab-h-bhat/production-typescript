
class Customer{
    private _name: string = '';
    private _age: number = 0;
    protected _count: number =0;
  constructor(public name: string, public age: number) {}


  get customerCount():number{
    return this._count;
  }
set customerCount(value:number){
    this._count=value;
}
  
}

class FamilyMember extends Customer{
    isFamilyMember:boolean = true;
    changeCustomerCount(){
        this._count=10;
    }
}

const customer = new Customer('John', 25);
// customer.customerCount=10;
const family:FamilyMember = new FamilyMember('John', 25);
console.log(customer);
console.log(family);

