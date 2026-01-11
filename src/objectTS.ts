/**
 * 📘 TypeScript
 * Topic: Objects, Structural Typing & Utility Types
 *
 * Covers:
 * - Object type inference
 * - Explicit object typing
 * - Structural typing
 * - Nested object types
 * - Utility types: Partial, Required, Pick, Omit
 */

/* ---------------------------------------------------
   1️⃣ Automatic Object Type Inference
   --------------------------------------------------- */

const chai = {
    name: "masala chai",
    price: 20,
    isHot: true,
};

/*
NOTE:
- TypeScript automatically infers object shape
- Properties become readonly in terms of structure
- You cannot add/remove properties later
*/

/* ---------------------------------------------------
   2️⃣ Explicit Object Type Annotation
   --------------------------------------------------- */

let tea: {
    name: string;
    price: number;
    isHot: boolean;
};

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true,
};

/*
NOTE:
- Explicit typing is useful for variables declared first
- Prevents accidental property mismatch
*/

/* ---------------------------------------------------
   3️⃣ Reusable Object Types using `type`
   --------------------------------------------------- */

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
};

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "milk"],
};

/*
NOTE:
- Use `type` or `interface` to avoid duplication
- Makes code reusable & scalable
*/

/* ---------------------------------------------------
   4️⃣ Structural Typing (IMPORTANT)
   --------------------------------------------------- */

type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };

let bigCup = {
    size: "500ml",
    material: "steel",
};

// ✅ Allowed due to structural typing
smallCup = bigCup;

/*
NOTE:
- TypeScript follows STRUCTURAL typing (duck typing)
- If structure matches, assignment is allowed
- Extra properties are ignored during assignment
*/

/* ---------------------------------------------------
   5️⃣ Nested Object Types
   --------------------------------------------------- */

type Item = {
    name: string;
    quantity: number;
};

type Address = {
    street: string;
    pin: number;
};

// Splitting complex types
type Order = {
    id: string;
    items: Item[];
    address: Address;
};

/*
NOTE:
- Splitting types improves readability
- Helps in large-scale applications
*/

/* ---------------------------------------------------
   6️⃣ Partial<T> Utility Type
   --------------------------------------------------- */

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
};

// Partial makes ALL properties optional
const updateChai = (update: Partial<Chai>) => {
    console.log("Updating chai with", update);
};

updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({}); // ⚠️ Allowed, but may be problematic

/*
NOTE:
- Partial<T> is useful for update APIs (PATCH)
- But allows empty objects → validate if required
*/

/* ---------------------------------------------------
   7️⃣ Required<T> Utility Type
   --------------------------------------------------- */

type ChaiOrder = {
    name?: string;
    quantity?: number;
};

// Required makes ALL properties mandatory
const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
};

placeOrder({
    name: "Masala Chai",
    quantity: 2,
});

/*
NOTE:
- Required<T> removes optional (?)
- Useful when optional data becomes mandatory later
*/

/* ---------------------------------------------------
   8️⃣ Pick<T, K> Utility Type
   --------------------------------------------------- */

/*
Pick:
- Creates a new type by selecting specific properties
*/

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30,
};

/*
NOTE:
- Pick is useful for DTOs, previews, summaries
*/

/* ---------------------------------------------------
   9️⃣ Omit<T, K> Utility Type
   --------------------------------------------------- */

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
};

// Omit removes specific properties
type PublicChai = Omit<ChaiNew, "ingredients">;

/*
NOTE:
- Omit is useful for hiding sensitive/internal data
- Common in API responses
*/

/* ---------------------------------------------------
   ✅ Summary
   --------------------------------------------------- */

/*
✔ TypeScript infers object shapes automatically
✔ Explicit typing improves safety
✔ Structural typing allows flexible assignments
✔ Nested types improve clarity
✔ Partial → update scenarios
✔ Required → strict validation
✔ Pick → select properties
✔ Omit → remove properties
✔ Utility types are heavily used in real projects
*/
