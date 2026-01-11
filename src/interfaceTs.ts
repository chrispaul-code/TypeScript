/**
 * 📘 TypeScript
 * Topic: type, interface, union, intersection, readonly, optional
 *
 * This file covers how TypeScript models data structures
 * and how they are used in real-world applications.
 */

/* ---------------------------------------------------
   1️⃣ Using `type` for Object Shapes
   --------------------------------------------------- */

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}

/*
NOTE:
- `type` is used to define the structure of data
- Ensures functions receive correct object shape
- Prevents missing or extra properties
*/

/* ---------------------------------------------------
   2️⃣ interface (Preferred for Classes)
   --------------------------------------------------- */

/*
interface:
- Best suited for object shapes
- Can be implemented by classes
- Can be extended (merged)
*/

interface TeaRecipe {
    water: number;
    milk: number;
}

// Allowed: class implementing interface
class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

/*
NOTE:
- Classes can implement interfaces
- Interfaces act as contracts
- All properties must be implemented
*/

/* ---------------------------------------------------
   3️⃣ Why `type` Cannot Be Implemented Sometimes
   --------------------------------------------------- */

/*
A class can only implement:
- object types
- interfaces
- intersection of object types

It CANNOT implement:
- union types
- primitive types
*/

// ❌ Not allowed
// type CupSize = "small" | "large";
// class Chai implements CupSize {}

/* ---------------------------------------------------
   4️⃣ Using interface for Literal Object Shapes
   --------------------------------------------------- */

interface CupSize {
    size: "small" | "large";
}

class Chai implements CupSize {
    size: "small" | "large" = "large";
}

/*
NOTE:
- Literal values can be used inside interfaces
- Useful for strict configuration objects
*/

/* ---------------------------------------------------
   5️⃣ Union & Literal Types
   --------------------------------------------------- */

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
    console.log(t);
}

/*
NOTE:
- Union types restrict values
- Prevent invalid inputs
- Very common in APIs & UI state
*/

/* ---------------------------------------------------
   6️⃣ Intersection Types (&)
   --------------------------------------------------- */

type BaseChai = {
    teaLeaves: number;
};

type Extra = {
    masala: number;
};

// Intersection → both properties required
type MasalaChaii = BaseChai & Extra;

const cup: MasalaChaii = {
    teaLeaves: 2,
    masala: 1,
};

/*
NOTE:
- Intersection combines multiple types
- Object must satisfy ALL types
- Used for feature composition
*/

/* ---------------------------------------------------
   7️⃣ Optional Properties (?)
   --------------------------------------------------- */

type User = {
    username: string;
    bio?: string; // optional
};

const u1: User = { username: "Chris" };
const u2: User = { username: "Paul", bio: "chris.ai" };

/*
NOTE:
- Optional properties may or may not exist
- Always check before usage
*/

/* ---------------------------------------------------
   8️⃣ readonly Properties
   --------------------------------------------------- */

type Config = {
    readonly appName: string;
    version: number;
};

const cfg: Config = {
    appName: "Namaste Py",
    version: 1,
};

// ❌ Error: Cannot assign to readonly property
// cfg.appName = "ChaiCode";

/*
NOTE:
- readonly means value cannot be changed after assignment
- Useful for constants & configuration
*/

/* ---------------------------------------------------
   9️⃣ type vs interface (Interview Favorite)
   --------------------------------------------------- */

/*
Use `type` when:
✔ Union & intersection types
✔ Primitives & literals
✔ Complex type combinations

Use `interface` when:
✔ Object shapes
✔ Class implementations
✔ Public APIs & libraries
*/

/* ---------------------------------------------------
   ✅ Summary
   --------------------------------------------------- */

/*
✔ `type` defines flexible data models
✔ `interface` is ideal for object contracts
✔ Classes use `implements` with interfaces
✔ Union types restrict values
✔ Intersection types combine features
✔ Optional (?) allows flexibility
✔ readonly ensures immutability
*/
