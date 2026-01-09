/**
 * 📘 TypeScript
 * Topic: Type Assertion, any vs unknown, Error Handling, never
 *
 * These concepts are VERY IMPORTANT for:
 * - Strict mode
 * - Real-world projects
 * - Interviews
 */

/* ---------------------------------------------------
   1️⃣ Type Assertion (Casting)
   --------------------------------------------------- */

let response: any = "42";

// We are telling TypeScript: "Trust me, this is a string"
let numericLength: number = (response as string).length;

/*
NOTE:
- Type Assertion does NOT convert the value
- It only tells TypeScript how to treat the variable
- Use when you are 100% sure about the type
*/

/* ---------------------------------------------------
   2️⃣ Type Assertion with Objects (JSON.parse)
   --------------------------------------------------- */

type Book = {
    name: string;
};

let bookString = '{"name":"who moved my cheese"}';

// JSON.parse returns `any`, so we assert the type
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

/*
NOTE:
- JSON.parse() always returns `any`
- Always use type assertion or validation
*/

/* ---------------------------------------------------
   3️⃣ DOM Type Assertion
   --------------------------------------------------- */

// document.getElementById can return HTMLElement | null
const inputElement = document.getElementById("username") as HTMLInputElement;

// inputElement.value can now be accessed safely
// console.log(inputElement.value);

/*
NOTE:
- DOM elements need type casting
- Very common in React & Vanilla JS
*/

/* ---------------------------------------------------
   4️⃣ any Type (AVOID)
   --------------------------------------------------- */

let value: any;

value = "chris";
value = [1, 2, 3];
value = 2.5;

// ❌ No compile-time safety
value.toUpperCase();

/*
Problems with `any`:
- No type checking
- Runtime crashes possible
- Disables TypeScript benefits
*/

/* ---------------------------------------------------
   5️⃣ unknown Type (PREFERRED)
   --------------------------------------------------- */

let newValue: unknown;

newValue = "chris";
newValue = [1, 2, 3];
newValue = 2.5;

// ❌ Error: Object is of type 'unknown'
// newValue.toUpperCase();

// ✅ Safe narrowing
if (typeof newValue === "string") {
    newValue.toUpperCase();
}

/*
Difference:
any      → no safety
unknown  → forces type checking
*/

/* ---------------------------------------------------
   6️⃣ Error Handling with unknown
   --------------------------------------------------- */

try {
    // risky code
} catch (error) {
    /*
    In strict mode, error is `unknown`
    */
    if (error instanceof Error) {
        console.log(error.message);
    }

    console.log("Error:", error);
}

/*
NOTE:
- Always narrow error type
- `error.message` is not allowed without check
*/

/* ---------------------------------------------------
   7️⃣ unknown vs Type Assertion
   --------------------------------------------------- */

const data: unknown = "chai or code";

// ❌ Error
// const strData: string = data;

// ✅ Assertion
const strData: string = data as string;

/*
NOTE:
- Prefer narrowing over assertion
- Assertion skips safety checks
*/

/* ---------------------------------------------------
   8️⃣ Literal Types & never
   --------------------------------------------------- */

type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }

    if (role === "user") {
        console.log("Redirecting to user dashboard");
        return;
    }

    /*
    At this point, all cases are handled.
    role's type becomes `never`
    */
    role;
}

/*
never means:
- A value that should never exist
- Used for exhaustive checks
*/

/* ---------------------------------------------------
   9️⃣ never Return Type
   --------------------------------------------------- */

function neverReturn(): never {
    while (true) {
        // infinite loop
    }
}

/*
Use cases of never:
- Infinite loops
- Functions that always throw errors
- Exhaustive switch checks
*/

/* ---------------------------------------------------
   ✅ Summary
   --------------------------------------------------- */

/*
✔ Use Type Assertion only when necessary
✔ Avoid `any` whenever possible
✔ Prefer `unknown` with proper narrowing
✔ Handle errors safely using instanceof Error
✔ `never` ensures all cases are handled
✔ These patterns are widely used in production apps
*/
