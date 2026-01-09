/**
 * 📘 TypeScript Basics
 * Topic: Type Inference, Type Annotation & Basic Data Types
 */

/* ---------------------------------------------------
   1️⃣ Type Inference
   --------------------------------------------------- */

// TypeScript automatically infers the type as `string`
let drink = "chai";

// ❌ Type Error: Cannot assign number to string
// drink = 2;

/*
NOTE:
Type Inference means TypeScript automatically understands
the data type after initialization.
Once inferred, the type cannot be changed.
*/

/* ---------------------------------------------------
   2️⃣ Types of Errors in TypeScript
   --------------------------------------------------- */

/*
1) Syntax Error:
   - Writing invalid TypeScript / JavaScript code

2) Type Error:
   - Assigning a value of the wrong data type
*/

let count = 10;
// count = "ten"; // ❌ Type Error

/* ---------------------------------------------------
   3️⃣ More Examples of Type Inference
   --------------------------------------------------- */

let chaiFlavour = "masala chai";
chaiFlavour = "ginger tea"; // ✅ Valid
// chaiFlavour = 5;         // ❌ Type Error

/* ---------------------------------------------------
   4️⃣ Type Annotation
   --------------------------------------------------- */

// Explicitly defining the data type
let chaiOrder: number = 2;

// chaiOrder = "two"; // ❌ Type Error

/*
NOTE:
Type Annotation means explicitly telling TypeScript
what data type a variable should have.
*/

/* ---------------------------------------------------
   5️⃣ Type Inference vs Type Annotation
   --------------------------------------------------- */

/*
Type Inference:
- Automatic
- Less verbose
- Best for simple variables

Type Annotation:
- Manual (: type)
- More strict
- Recommended for functions and APIs
*/

/* ---------------------------------------------------
   6️⃣ Basic Data Types in TypeScript
   --------------------------------------------------- */

// string
let teaName: string = "chai";

// number
let price: number = 20;

// boolean
let isAvailable: boolean = true;

/* ---------------------------------------------------
   ✅ Summary
   --------------------------------------------------- */

/*
- TypeScript prevents runtime bugs by catching errors early
- Once a type is set, it cannot be changed
- Use Type Annotation for clarity and safety
- Type Inference is useful for quick and simple code
*/
