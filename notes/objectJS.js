/**
 * 📘 JavaScript Revision
 * Topic: Objects, Constructor Functions, Classes
 */

/* ---------------------------------------------------
   1️⃣ Object Literals
   --------------------------------------------------- */

/*
Object Literal:
- Simple way to create an object
- Suitable for small, one-off objects
*/

const person = {
    fname: "Chris",
    lname: "Paul",
    contact: "8927291753",
    getName: function () {
        console.log(this.fname);
    },
};

const p2 = {
    fname: "John",
    lname: "Doe",
    contact: "89291993",
    getName: function () {
        console.log(this.fname);
    },
};

/*
ADVANTAGES:
✔ Easy to write
✔ No setup required

DISADVANTAGES:
❌ No blueprint
❌ Code repetition
❌ Not scalable
*/

/* ---------------------------------------------------
   2️⃣ Naming Conventions
   --------------------------------------------------- */

/*
Normal Functions → camelCase
Examples:
- getAge()
- addNums()
- printThis()

Constructor Functions / Classes → PascalCase
Examples:
- Person
- User
- Employee
*/

/* ---------------------------------------------------
   3️⃣ Constructor Functions (Before ES6)
   --------------------------------------------------- */

/*
Constructor Function:
- Acts as a blueprint
- Used with `new` keyword
*/

function PersonConstructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;

    this.getName = function () {
        console.log(this.fname);
    };
}

const person1 = new PersonConstructor("Chris", "Paul", "91819");
const person2 = new PersonConstructor("John", "Doe", "88888");

console.log(person1);

/*
IMPORTANT NOTES:
- `this` refers to the newly created object
- Each object gets its own copy of methods
- Not memory efficient (method duplication)
*/

/* ---------------------------------------------------
   4️⃣ Class-Based Objects (ES6+)
   --------------------------------------------------- */

/*
Class:
- Syntactic sugar over constructor functions
- Cleaner & more readable
- Preferred in modern JavaScript
*/

class Person {
    constructor(fname, lname, contact) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }

    getName() {
        console.log(this.contact);
    }
}

const person3 = new Person("Jo", "De", "888978");

/*
ADVANTAGES:
✔ Cleaner syntax
✔ Better readability
✔ Methods stored in prototype (memory efficient)
✔ Industry standard
*/

/* ---------------------------------------------------
   5️⃣ Object Creation Comparison
   --------------------------------------------------- */

/*
Object Literal:
- Good for small objects
- No reuse

Constructor Function:
- Reusable
- Old style
- Less readable

Class:
- Best approach
- Reusable & scalable
- Preferred in modern JS & TS
*/

/* ---------------------------------------------------
   ✅ Summary
   --------------------------------------------------- */

/*
✔ Objects store data + behavior
✔ Object literals are simple but not scalable
✔ Constructor functions provide blueprint
✔ Classes are modern, clean, and preferred
✔ `this` refers to the current object
*/
