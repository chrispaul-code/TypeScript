/**
 * 📘 TypeScript Advanced Basics
 * Topic: Union Types (|), Literal Types, undefined, any vs unknown
 */

/* ---------------------------------------------------
   1️⃣ Union Types ( | )
   --------------------------------------------------- */

// Union type allows a variable to hold multiple data types
let subs: number | string = 10;
subs = "1M"; // ✅ Allowed

// subs = true; // ❌ Type Error (boolean not allowed)

/*
NOTE:
Union types are useful when a value can be more than one type.
Example: ID can be number or string.
*/

/* ---------------------------------------------------
   2️⃣ Literal Types
   --------------------------------------------------- */

// Only specific string values are allowed
let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success"; // ✅ Allowed
// apiRequestStatus = "done"; // ❌ Not allowed

/*
NOTE:
Literal types restrict values to exact predefined options.
Very useful for:
- API status
- Role-based access
- UI state management
*/

// Another example
let airlineSeat: "aisle" | "window" | "middle" = "aisle";
airlineSeat = "middle"; // ✅ Allowed

/* ---------------------------------------------------
   3️⃣ Union with undefined
   --------------------------------------------------- */

const orders = ["12", "20", "28", "42"];

let currentOrder: string | undefined;
/*
Why include `undefined`?
Because the value may or may not be assigned.
This avoids accidental `any` type usage.
*/

for (let order of orders) {
    if (order === "28") {
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);

/*
NOTE:
Without explicit typing, TypeScript may infer `any`
in some cases — which should be avoided.
*/

/* ---------------------------------------------------
   4️⃣ any vs unknown (VERY IMPORTANT)
   --------------------------------------------------- */

// any (AVOID using)
let valueAny: any = "chai";
valueAny = 10;
valueAny = true;

// No compile-time checking
valueAny.toUpperCase(); // ❌ No error, but may crash at runtime

/*
Problems with `any`:
- Disables TypeScript safety
- No error checking
- Behaves like plain JavaScript
*/

// unknown (PREFERRED)
let valueUnknown: unknown = "chai";

// ❌ Error: Object is of type 'unknown'
// valueUnknown.toUpperCase();

// ✅ Safe usage after type checking
if (typeof valueUnknown === "string") {
    console.log(valueUnknown.toUpperCase());
}

/*
Difference between any and unknown:

any:
- No type safety
- Use only as last resort

unknown:
- Safer alternative to any
- Forces type checking before usage
*/

/* ---------------------------------------------------
   5️⃣ When to Use What
   --------------------------------------------------- */

/*
Use Union Types:
- When a value can be multiple known types

Use Literal Types:
- When values must be strictly controlled

Use undefined:
- When a value may be absent

Use unknown:
- When you don't know the type yet
- API responses
- User input
*/

/* ---------------------------------------------------
   ✅ Summary
   --------------------------------------------------- */

/*
✔ Union types provide flexibility
✔ Literal types provide strict control
✔ Avoid `any` whenever possible
✔ Prefer `unknown` for safer code
✔ TypeScript helps catch bugs at compile time
*/
