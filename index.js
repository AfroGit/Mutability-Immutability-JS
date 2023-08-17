/*
To determine the kind of data you are working with, use the typeof operator. The typeof operator works perfectly with all primitive data types except null.
*/ 
// let num = 23;

// console.log(typeof num)

/*
Below is an example of an undefined variable. A variable is said to be undefined if there are no values attached to it.*/ 
// let figure;
// let fig = null
// console.log(fig)

/*
Booleans are not strings – notice that true or false are not in quotes.*/ 

//  let student = true;
//  let married = false;
// console.log(student)

/*
As a primitive data type, symbols are unique. The values that are returned are also guaranteed to be unique*/ 

 // const mySymbol = Symbol();
   
 // console.log(typeof mySymbol)

 // const myBigInt = 12n;

 // console.log(typeof myBigInt)

 // const check = BigInt(414242532)

 //   console.log(typeof check)


function favorite(question) {
      console.log(`Hi dear, do you like ${question} programming language?`)
   }

   favorite('JavaScript')
