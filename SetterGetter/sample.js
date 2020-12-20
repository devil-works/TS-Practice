// class Book {
//   private _name: string = '';
//   set name(value: string){
//     this._name = value;
//   }
//   get name(): string{
//     return this._name;
//   }
// }
// let mybook = new Book();
// mybook.name = 'JavaScript入門';
// console.log(mybook.name);
var Book = /** @class */ (function () {
    function Book() {
        this.name = 'Java';
    }
    return Book;
}());
var mybook = new Book();
console.log(mybook);
