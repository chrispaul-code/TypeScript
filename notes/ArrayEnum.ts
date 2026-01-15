/**
 * 📘 TypeScript
 * Topic: Arrays, Tuples & Enums
 *
 * Covers:
 * - Typed arrays
 * - Readonly arrays
 * - Multidimensional arrays
 * - Tuples & tuple pitfalls
 * - Enums & const enums
 */

/* ---------------------------------------------------
   1️⃣ Arrays in TypeScript
   --------------------------------------------------- */

// Array of strings
const chaiFlavour: string[] = ["Masala", "Adrak"];

// Array of numbers
const chaiPrice: number[] = [10, 20];

// Generic array syntax
const rating: Array<number> = [4.5, 5.0];

/*
NOTE:
- Both `type[]` and `Array<type>` are valid
- Use `type[]` for simplicity
*/

/* ---------------------------------------------------
   2️⃣ Array of Objects
   --------------------------------------------------- */

type Chai = {
    name: string;
    price: number;
};

const menu: Chai[] = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 },
];

/*
NOTE:
- Strong typing prevents missing properties
- Order and shape must match the type
*/

/* ---------------------------------------------------
   3️⃣ Readonly Arrays
   --------------------------------------------------- */

const cities: readonly string[] = ["Delhi", "Jaipur"];

// ❌ Error: Property 'push' does not exist
// cities.push("Mumbai");

/*
NOTE:
- readonly arrays prevent mutation
- Useful for constants & config data
*/

/* ---------------------------------------------------
   4️⃣ Multidimensional (2D) Arrays
   --------------------------------------------------- */

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
];

/*
NOTE:
- number[][] → array of number arrays
- Common in matrix & grid data
*/

/* ---------------------------------------------------
   5️⃣ Tuples
   --------------------------------------------------- */

// Fixed-length & fixed-order array
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];

// Optional tuple element
let userInfo: [string, number, boolean?];
userInfo = ["chris", 100];
userInfo = ["chris", 100, true];

/*
NOTE:
- Tuples enforce order & type
- Optional elements must be at the end
*/

/* ---------------------------------------------------
   6️⃣ Readonly Tuples
   --------------------------------------------------- */

//const location: readonly [number, number] = [28.66, 32.22];

/*
NOTE:
- Prevents modification
- Useful for coordinates
*/

/* ---------------------------------------------------
   7️⃣ Named Tuples (Readability)
   --------------------------------------------------- */

const chaiItems: [name: string, price: number] = ["Masala", 25];

/*
NOTE:
- Named tuples improve readability
- Names are for documentation only
*/

/* ---------------------------------------------------
   8️⃣ Tuple Pitfall (IMPORTANT)
   --------------------------------------------------- */

let t: [string, number] = ["Chai", 10];

// ⚠️ Unexpected behavior
t.push("extra");

/*
WHY THIS HAPPENS:
- Tuples are arrays at runtime
- push() is allowed by JavaScript
- Avoid mutating tuples
*/

/* ---------------------------------------------------
   9️⃣ Enums
   --------------------------------------------------- */

/*
Enum:
- Named set of constants
- Improves readability & safety
*/

// Numeric enum (default starts from 0)
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE,
}

const size = CupSize.LARGE;

// Numeric enum with custom start
enum Status {
    PENDING = 100,
    SERVED,     // 101
    CANCELLED,  // 102
}

// String enum
enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
}

function makeChai(type: ChaiType): void {
    console.log(type);
}

makeChai(ChaiType.GINGER);
// makeChai("masala"); ❌ Not allowed

/*
NOTE:
- String enums are safer than numeric enums
- Prevent accidental invalid values
*/

/* ---------------------------------------------------
   🔟 const enum (Performance)
   --------------------------------------------------- */

/*
const enum:
- Inlined at compile time
- No enum object in JS output
- Faster & smaller bundle
*/

const enum Sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
}

const s = Sugar.HIGH;

/*
LIMITATION:
- Cannot be accessed at runtime
- Not supported with isolatedModules
*/

/* ---------------------------------------------------
   ✅ Summary
   --------------------------------------------------- */

/*
✔ Arrays enforce consistent data types
✔ readonly prevents mutation
✔ Tuples enforce fixed structure
✔ Be careful with tuple mutation
✔ Enums represent fixed sets of values
✔ Prefer string enums for safety
✔ Use const enum for performance
*/
