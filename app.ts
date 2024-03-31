 // Tests  Equality  with string:   (1)
 console.log('test Equally with string: ' , "mango"=== "mango");
 // test Inqually with string:     (2)
 console.log('test Iqually with string:', "mango" !== "mango");


 //• Tests using the lower case function (3 /4 )
 console.log('test lowercase function Eqaul: ' , "MANGO".toLowerCase() === "mango");
 console.log('test lowercase function not Equal: ' , "MANGO".toLowerCase() !== "mango");

 //• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to (5)
//greater than test   (5):
console.log('greater than: ', 20  >  10 );
// less than test (6)
console.log('less than: ',  20 <  10 );

// greater than and equal test (7)
console.log('test greater than equal: ', 30 >= 20);
// less than and equal test (8)
console.log('test less  than not equal: ', 30 <= 20);


// test: Eqaully test (9)
console.log('test   than equal: ', 40 === 40);
//  test: not Equally (10)
console.log('test  than not equal: ', 40 !== 40);

//• Tests using "and" (true)  canditin operators (11)
console.log('test  using and operator Equal: ', 40 === 40  && 20 === 20);
// test using "and " (false) candition operators (12)
console.log('test  using and operator not Eqaul: ', 40 === 40  && 20 !== 20);


// test using "or " (true) candition operators (13)
console.log('test  using or: ', 40 === 40   ||  20 !== 20);
// test using "or " (false) candition operators (14)
console.log('test  using or: ', 40 !== 40   ||  20 !== 20);


//• Test whether an item is in a array (15)
let fruits: string [] = ['apple','mango','banana'];
console.log('test apple in a array:' , fruits.includes("apple"));

//• Test whether an item is not in a array (16)
const fruit: string  [] = ['apple','mango','banana'];
console.log('test orange is not  in a array:', fruit.includes("orange"));











