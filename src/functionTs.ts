/**
 * 📘 TypeScript
 * Topic: Functions in TypeScript
 *
 * Covers:
 * - Function parameters
 * - Return types
 * - void functions
 * - Optional & default parameters
 * - Object parameters with strict typing
 */

/* ---------------------------------------------------
   1️⃣ Function Parameters
   --------------------------------------------------- */

// Passing values with explicit types
function makeChai(type: string, cups: number): void {
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2);

/*
NOTE:
- All function parameters should be typed
- Prevents incorrect argument usage
*/

/* ---------------------------------------------------
   2️⃣ Function Return Types
   --------------------------------------------------- */

// Explicit return type
function getChaiPrice(): number {
    return 25;
}

/*
NOTE:
- Even if return type is not written,
  TypeScript will infer it
- Explicit return type is recommended
  for public APIs & readability
*/

/* ---------------------------------------------------
   3️⃣ void Return Type
   --------------------------------------------------- */

// Function that does not return anything
function logChai(): void {
    console.log("Chai is ready");
}

/*
NOTE:
- void means no return value
- Common for logging, side effects
*/

/* ---------------------------------------------------
   4️⃣ Optional Parameters (?)
   --------------------------------------------------- */

// Optional parameter
function orderChai(type?: string): void {
    if (type) {
        console.log(`Ordering ${type} chai`);
    } else {
        console.log("Ordering regular chai");
    }
}

/*
RULES:
- Optional parameters must come AFTER required ones
- They may be undefined
*/

/* ---------------------------------------------------
   5️⃣ Default Parameters
   --------------------------------------------------- */

// Default value if argument is not passed
function orderChaiWithDefault(type: string = "Masala"): void {
    console.log(`Ordering ${type} chai`);
}

/*
NOTE:
- Default parameters are automatically optional
- Prefer defaults over optional when possible
*/

/* ---------------------------------------------------
   6️⃣ Object as Function Parameter
   --------------------------------------------------- */

// Object parameter with strict typing
function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large";
}): number {
    return 4;
}

/*
NOTE:
- Inline object typing is useful for small functions
- Use `type` or `interface` for reuse
*/

/* ---------------------------------------------------
   7️⃣ Best Practice: Reusable Type
   --------------------------------------------------- */

type ChaiOrder = {
    type: string;
    sugar: number;
    size: "small" | "large";
};

function createChaiWithType(order: ChaiOrder): number {
    return 4;
}

/*
WHY THIS IS BETTER:
✔ Reusable
✔ Cleaner
✔ Easier to maintain
*/

/* ---------------------------------------------------
   ✅ Summary
   --------------------------------------------------- */

/*
✔ Always type function parameters
✔ Use explicit return types
✔ void → no return value
✔ Optional params use ?
✔ Default params are preferred
✔ Strongly type object parameters
✔ Functions are core to TS safety
*/
