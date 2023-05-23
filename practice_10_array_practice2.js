
let names = ["Clark", "Bruce", "Barry", "Diana", "John"];
// [{firstName : "Clark"}, {firstName : "Bruce"}...]

console.log(names);

// let firstObj = {
//     firstName : "Clark"
// };
// console.log(firstObj);

let myNames = [];

for (let each of names) {
    // Create each object to be added to the myNames array
    let myObj = {
        firstName : each
    }
    myNames.push(myObj);
}
console.log(myNames);

/*
[
  { firstName: 'Clark' },
  { firstName: 'Bruce' },
  { firstName: 'Barry' },
  { firstName: 'Diana' },
  { firstName: 'John' }
]
*/

let myCoolNames = names.map( each => { 
    
    return {
        firstName:each,
        charCount : each.length
    
    }
    }  );

console.log(myCoolNames);

/*
[  { firstName: 'Clark', charCount: 5 },
  { firstName: 'Bruce', charCount: 5 },
  { firstName: 'Barry', charCount: 5 },
  { firstName: 'Diana', charCount: 5 },
  { firstName: 'John', charCount: 4 }
]
*/