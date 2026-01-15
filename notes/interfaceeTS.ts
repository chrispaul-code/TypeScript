/**
 * 📘 TypeScript
 * Topic: Interfaces
 *
 * Interfaces are used to define the structure (shape)
 * of objects, functions, classes, and more.
 *
 * Interfaces are OPEN (can be merged),
 * unlike `type` which is CLOSED.
 */

/* ---------------------------------------------------
   1️⃣ Basic Interface (Object Shape)
   --------------------------------------------------- */

interface Chai {
    flavore: string;
    price: number;
    milk?: boolean; // optional property
}

// Object must follow interface structure
const masala: Chai = {
    flavore: "masala",
    price: 30,
};

/*
NOTE:
- Interfaces define the shape of an object
- Extra properties are not allowed
- Optional properties use ?
*/

/* ---------------------------------------------------
   2️⃣ readonly Properties
   --------------------------------------------------- */

interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {
    id: 1,
    name: "Chai Code",
};

// ❌ Error: Cannot assign to 'id'
// s.id = 2;

/*
NOTE:
- readonly prevents reassignment
- Useful for IDs & constants
*/

/* ---------------------------------------------------
   3️⃣ Function Type Interfaces
   --------------------------------------------------- */

interface DiscountCal {
    (price: number): number;
}

// Function must match the interface signature
const apply50: DiscountCal = (p) => p * 0.5;

/*
NOTE:
- Interfaces can define function signatures
- Helpful for callbacks & utilities
*/

/* ---------------------------------------------------
   4️⃣ Interface for Classes / Objects with Methods
   --------------------------------------------------- */

interface TeaMachine {
    start(price: number): void;
    stop(): void;
}

// Object implementing interface
const machine: TeaMachine = {
    start() {
        console.log("start");
    },
    stop() {
        console.log("stop");
    },
};

/*
NOTE:
- Interfaces define required methods
- Ensures consistent API structure
*/

/* ---------------------------------------------------
   5️⃣ Index Signatures
   --------------------------------------------------- */

interface ChaiRating {
    [flavore: string]: number;
}

const rating: ChaiRating = {
    masala: 4.5,
    ginger: 4,
};

/*
NOTE:
- Index signatures allow dynamic keys
- All values must follow the declared type
*/

/* ---------------------------------------------------
   6️⃣ Interface Merging (Declaration Merging)
   --------------------------------------------------- */

interface User {
    name: string;
}

interface User {
    age: number;
}

// Merged interface
const u: User = {
    name: "Chris",
    age: 42,
};

/*
NOTE:
- Interfaces with same name get merged
- This is NOT possible with `type`
- Common in library augmentation
*/

/* ---------------------------------------------------
   7️⃣ Extending Interfaces
   --------------------------------------------------- */

interface A {
    a: string;
}

interface B {
    b: string;
}

// Multiple inheritance
interface C extends A, B {}

const obj: C = {
    a: "hello",
    b: "world",
};

/*
NOTE:
- Interfaces support multiple inheritance
- Improves reusability & composition
*/

/* ---------------------------------------------------
   8️⃣ Interface vs Type (Quick Comparison)
   --------------------------------------------------- */

/*
Use interface when:
✔ Defining object shapes
✔ Working with classes
✔ Public APIs & libraries
✔ Need declaration merging

Use type when:
✔ Union & intersection types
✔ Primitives & literals
✔ Utility type compositions
*/

/* ---------------------------------------------------
   ✅ Summary
   --------------------------------------------------- */

/*
✔ Interfaces define structure (contract)
✔ Optional (?) and readonly are supported
✔ Can describe functions & methods
✔ Support index signatures
✔ Interfaces can be merged
✔ Can extend multiple interfaces
✔ Preferred for object-oriented design
*/
