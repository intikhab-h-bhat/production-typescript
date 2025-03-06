

abstract class Books{
    constructor(
        public title: string,
        public author: string )       
        {}        
    abstract getBookDetails():string;
    getTotalPhotos():number{
        return 0;
    }

}


class Fiction extends Books{

    constructor(title: string,author: string,price: number){
        super(title,author);
    }
    getBookDetails(): string {
        return `The book ${this.title} is written by ${this.author}`;
    }
    getTotalPhotos():number{
        return 20;
    }
}

const fiction1=new Fiction('The Alchemist','Paulo Coelho',500);

console.log(fiction1.getBookDetails(),fiction1.getTotalPhotos());
