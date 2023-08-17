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

/*To prevent object mutability, you can use the Object.preventExtensions(), Object.seal(), and Object.freeze() methods. */

// const studentNames = {
//            student1: 'Halina',
//            student2: "Brookes",
//            student3:"Anthony"
//    }


//    Object.defineProperty(studentNames, "student4", {
//       value: "Mirabel",
//    })

//    console.log(studentNames.student4);


/*Object.preventExtensions(obj)

Using Object.preventExtensions stops new properties from entering the object. The object does not increase in size and maintains its properties. By default, all objects in JavaScript are extensible. With this method, you can delete properties from your object. */

 // const makeNonExtensive = {
 //           firstname: "Charles",
 //           lastname: "Chandlier"
 //   }

 //   Object.preventExtensions(makeNonExtensive)

 //   makeNonExtensive.designation = "Software Engineer";
   
 //   console.log(makeNonExtensive)
/*Above the designation property was not added and there's no error message. */ 



/* Object.defineProperty(obj, prop, descriptor)

  obj: The object you want to add properties to.
  
  prop: You define the name of the property you want to add or change.         It should be either a string or symbol
  
  Descriptor: You include the value of the property.
*/ 


 // const makeNonExtensive = {
 //           firstname: "Charles",
 //           lastname: "Chandlier"
 //   }

 //   Object.preventExtensions(makeNonExtensive)

 //   Object.defineProperty(makeNonExtensive, "age", {
 //      value: "twenty",
 //   })
/*Adding new properties using the define property throws error message */ 
   // console.log(makeNonExtensive)

/*The value of the property of a non-extensible object can be changed as demonstrated with the below line of code. */ 


 // const makeNonExtensive = {
 //            firstname: "Charles",
 //            lastname: "Chandlier"
 //    }

 //   Object.preventExtensions(makeNonExtensive)

 //   Object.defineProperty(makeNonExtensive, 'firstname', {
 //    value: 'Jason',
 //    })
 //    console.log(makeNonExtensive)

/*In spite of the object being non-extensible, the lastname property was deleted below. */

//  delete object.propertyname

 // const makeNonExtensive = {
 //           firstname: "Charles",
 //           lastname: "Chandlier"
 //   }

 //   Object.preventExtensions(makeNonExtensive)

 //   delete makeNonExtensive.lastname

 //   console.log(makeNonExtensive)


/*
Object.seal()

*/ 
// const studentNames = {
//            student1: 'Halina',
//            student2: "Brookes", 
//            student3:"Alina"
//    }

//    Object.seal(studentNames)
// Object.isSealed(studentNames) is used to check if an object is sealed.
   // console.log(Object.isSealed(studentNames))

   
      // const studentNames = {
      //         student1: 'Halina',
      //         student2: "Brookes",
      //         student3:"Alina"
      // }

      //    Object.seal(studentNames)

      // Object.defineProperty(studentNames, 'student2', {
      //    value: "Water-Brookes",
      // })
// student2 has been changed
      // console.log(studentNames)


/* Object.freeze() */ 

 // const teamplayers = {
 //           player1: "Andrey",
 //           player2: "Abundance"
 //   }


   // Object.freeze(teamplayers)

   // Object.defineProperty(teamplayers, 'player3', {
   //    value: 'Charis'
   //    })
   //    console.log(teamplayers)

   // console.log(teamplayers)
// Dot notation fails silently when trying to add a property, but defineproperty throws a TypeError instead.

 // const teamplayers = {
 //           player1: "Andrey",
 //           player2: "Abundance",
 //                   substitutes: {
 //                   player3: "Jeremiah",
 //                   player4: "Jayden"
 //            }
 //   }

 //   const squad = teamplayers;

 //   Object.freeze(teamplayers)


 //   Object.defineProperty(teamplayers.substitutes, 'player5', {
 //      value: "Woodland"
 //   })

 //   console.log(teamplayers)
/*Player5 has been added to the nested substitutes even though the object.freeze method was applied to the parent teamplayers.
You can also modify the value of the properties in the nested object.
Everything that the object.freeze prevents on the parent object is obtainable on the child object that is nested.*/ 

/*Below is an example of a deep freeze which prevents any kind of changes or deletions on the object,applying to both the external obj and its its nested objects. */ 
 
// const deepVal = obj => {
//         Object.keys(obj).forEach(prop => {
//         if (typeof obj[prop] === 'object') deepVal(obj[prop]);
//         });
//         return Object.freeze(obj);
//     };

//     const teamplayers = deepVal( {
//             player1: "Andrey",
//             player2: "Abundance",
//                     substitutes: {
//                         player3: "Jeremiah",
//                         player4: "Jayden"
//                     }
//             }
//     )
//    const squad = teamplayers;

//    Object.freeze(teamplayers)
   
//    console.log(Object.isFrozen(teamplayers));
   
//    console.log(Object.isFrozen(squad));

