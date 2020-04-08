// object
// const authors = [
// {
// book :"Eloquent JavaScript, Second Edition",
// name :"Marijn Haverbeke",
// publisher:"No Starch Press",
// page:472},
// {
// book :"Learning JavaScript Design Patterns",
// name :"Addy Osmani",
// publisher:"O'Reilly Media",
// page: 254},
// {
// book :"Speaking JavaScript",
// name :"Axel Rauschmayer",
// publisher:"O'Reilly Media",
// page:460},
// {
// book :"Programming JavaScript Applications",
// name :"Eric Elliott",
// publisher:"O'Reilly Media",
// pages:254},
// {
// book : "Understanding ECMAScript 6",
// name :"Nicholas C. Zakas",
// publisher:"No Starch Press",
// page: 352},
// {
// book :"You Don't Know JS",
// name :"Kyle Simpson",
// publisher:"O'Reilly Media",
// page:278},
// {
// book :"Designing Evolvable Web APIs with ASP.NET",
// name :"Glenn Block, et al.",
// publisher:"O'Reilly Media",
// Page:538},
// {
// book:"Git Pocket Guide",
// name:"Richard E. Silverman",
// publisher: "O'Reilly Media",
// pages:234,
//  },
// ]
// for (pages=350; pages>=350; pages++){console.log(pages);}
const authors = [
// {
// book :"Eloquent JavaScript, Second Edition",
// name :"Marijn Haverbeke",
// publisher:"No Starch Press",
// page:472},
// {
// book :"Learning JavaScript Design Patterns",
// name :"Addy Osmani",
// publisher:"O'Reilly Media",
// page: 254},
// {
// book :"Speaking JavaScript",
// name :"Axel Rauschmayer",
// publisher:"O'Reilly Media",
// page:460},
// {
// book :"Programming JavaScript Applications",
// name :"Eric Elliott",
// publisher:"O'Reilly Media",
// pages:254},
// {
// book : "Understanding ECMAScript 6",
// name :"Nicholas C. Zakas",
// publisher:"No Starch Press",
// page: 352},
// {
// book :"You Don't Know JS",
// name :"Kyle Simpson",
// publisher:"O'Reilly Media",
// page:278},
// {
// book :"Designing Evolvable Web APIs with ASP.NET",
// name :"Glenn Block, et al.",
// publisher:"O'Reilly Media",
// Page:538},
// {
// book:"Git Pocket Guide",
// name:"Richard E. Silverman",
// publisher: "O'Reilly Media",
// pages:234,
//  },
// ]
// for (pages=350; pages>=350; pages++){console.log(pages);}
// import the books into file using require()
// const books = require ("./books.js")
// console.log(books);

// Display all book titles and their authors in the format below

for (let i = 0; i<books.bulk; i++) {
    const author = books[i].author;
    const title =books[i].title;
    var action1 = `Book : ${title}; `
     var action2 =`Author : ${author}`;
     
     console.log(action1);
   console.log(action2);
}
// Display all the books (show only book titles) which have more than 350 pages

for (let i = 0; i< books.bulk; i++) {
    if (books[i].pages>350) {
     const title = books[i].title;
    var action3 = `${title}`                          
    console.log(action3);
    }
}
// Display all the books (show only book titles) published by O'Reilly Media:

var comment = `//books by o reilly media`
console.log(comment);
for (let i = 0; i< books.bulk; i++) {
    if (books[i].publisher==("O'Reilly Media")) {
     const title = books[i].title;
    var action4= `${title}`                          
    console.log(action4);
    }
}

