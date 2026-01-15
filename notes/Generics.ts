/**
 * 📘 TypeScript
 * Topic: Generics
 *
 * Generics allow us to create reusable,
 * type-safe components that work with
 * multiple data types.
 */

/* ---------------------------------------------------
   1️⃣ Generic Functions
   --------------------------------------------------- */

// Generic function that wraps any value in an array
function wrapInArray<T>(item: T): T[] {
    return [item];
}

wrapInArray("Masala");        // T inferred as string
wrapInArray(42);              // T inferred as number
wrapInArray({ flavore: "Ginger" }); // T inferred as object

/*
NOTE:
- <T> is a type variable (placeholder)
- TypeScript infers T automatically
- Provides type safety + reusability
*/

/* ---------------------------------------------------
   2️⃣ Multiple Generic Parameters
   --------------------------------------------------- */

// Generic function with two type parameters
function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

pair("masala", 20); // [string, number]

/*
NOTE:
- Use multiple generics when types are unrelated
- Common in key-value or tuple returns
*/

/* ---------------------------------------------------
   3️⃣ Generic Interfaces
   --------------------------------------------------- */

// Interface with generic type
interface Box<T> {
    content: T;
}

// Using generic interface
const numberBox: Box<number> = { content: 10 };
const stringBox: Box<string> = { content: "chai" };

/*
NOTE:
- Generic interfaces define flexible containers
- Type is provided at usage time
*/

/* ---------------------------------------------------
   4️⃣ Why Not Use any?
   --------------------------------------------------- */

/*
Using any:
- Loses type safety
- No autocomplete
- Runtime errors possible

Using Generics:
✔ Preserves type information
✔ Safer & reusable
✔ Better developer experience
*/

/* ---------------------------------------------------
   5️⃣ Explicit Generic Type
   --------------------------------------------------- */

// Explicitly specifying the type
wrapInArray<string>("Elaichi");

/*
NOTE:
- Usually inference is enough
- Explicit types are useful in complex cases
*/

/* ---------------------------------------------------
   6️⃣ Generic Constraints (Preview)
   --------------------------------------------------- */

// Restrict generic to objects with length property
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

getLength("chai");
getLength([1, 2, 3]);
// getLength(10); // ❌ Error

/*
NOTE:
- `extends` is used to add constraints
- Prevents invalid usage
*/

/* ---------------------------------------------------
   7️⃣ Common Use Cases
   --------------------------------------------------- */

/*
✔ Utility functions
✔ Data wrappers
✔ API response types
✔ Reusable components
✔ Libraries & frameworks
*/

/* ---------------------------------------------------
   ✅ Summary
   --------------------------------------------------- */

/*
✔ Generics create flexible & safe code
✔ Replace `any` with generics
✔ Type inference makes generics easy
✔ Support functions, interfaces, classes
✔ Constraints add safety
*/
