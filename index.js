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


// function favorite(question) {
//       console.log(`Hi dear, do you like ${question} programming language?`)
//    }

//    favorite('Jing Jong')

/*
Another pointer is placed on the stack when staff was assigned to staff2. Now, these pointers point to a single object on the heap.

Reference data does not copy values, but rather pointers.
*/ 
// const staff = {
//          name: "Strengthened",
//          age: 43,
//          Hobbies: ["reading", "Swimming"]
//    }
/*Changing the age of staff2 updates the age of the staff object. Now you know it is because both point to the same object. */ 
  
// const staff2 = staff;

   // console.log(staff);
   
   // console.log(staff2);

 // staff2.age = 53;

 //   console.log(staff)

 //   console.log(staff2)

/*
Syntax: Object.assign(target, source)
The method has two arguments, target and source. The target is the object that receives new properties, while the source is where the properties come from.

*/ 

// const staff = {
//       name: "Strengthened",
//       age: 43,
//       Hobbies: ["reading", "Swimming"]
//    }
// The properties on the staff object were cloned into an empty target object below.
 //   const staff2 = Object.assign({}, staff);

 // staff2.age = 53;
/*staff2 now has its own properties. 
changing the value of any of its properties, will not affect the values of the properties on the staff object.*/ 
   // console.log(staff)

   // console.log(staff2)


/*syntax of the spread operator:
const newObj = {...obj}
*/ 

// const staff = {
//     name: "Strengthened",
//     age: 43,
//     Hobbies: ["reading", "Swimming"]
//    }

   /*place three dots ... before the name of the object whose properties you intend to clone */ 
  // const staff2 = {...staff};


  //  staff2.age = 53;

  //  console.log(staff)

  //  console.log(staff2)

/*Changing student1 to Brookes does not change the initial value on student2. This proves that in primitive data types, actual values are copied, so both have their own. On the stack memory, student1 and student2 are distinct. */ 

  // let student1 = "Halina";

  // let student2 = student1;
 
  // student1 = "Brookes"

  // console.log(student1);

  //     console.log(student2)

/* */

const studentNames = {
           student1: 'Halina',
           student2: "Brookes",
           student3:"Anthony"
   }


   Object.defineProperty(studentNames, "student4", {
      value: "Mirabel",
   })

   console.log(studentNames.student4);