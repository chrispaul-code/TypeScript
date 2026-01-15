/**
 * 📘 TypeScript
 * Topic: Type Narrowing
 *
 * Type Narrowing means reducing a broad type
 * (union type) into a more specific type
 * using checks like typeof, instanceof,
 * custom type guards, and discriminated unions.
 */

/* ---------------------------------------------------
   1️⃣ Type Narrowing using typeof
   --------------------------------------------------- */

function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai..`;
    }
    // Here TypeScript knows `kind` is a number
    return `Chai order : ${kind}`;
}

/*
NOTE:
- typeof is used for primitive types
- string, number, boolean, undefined, symbol
*/

/* ---------------------------------------------------
   2️⃣ Type Narrowing using instanceof
   --------------------------------------------------- */

class KulhadChai {
    serve() {
        return "Serving Kulhad Chai";
    }
}

class Cutting {
    serve() {
        return "Serving Cutting Chai";
    }
}

function serve(chai: KulhadChai | Cutting) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
    // If not KulhadChai, it must be Cutting
    return chai.serve();
}

/*
NOTE:
- instanceof works with classes
- Checks object is instance of a class
- Very useful in OOP-based code
*/

/* ---------------------------------------------------
   3️⃣ Type Narrowing using Custom Type Guards
   --------------------------------------------------- */

type ChaiOrder = {
    type: string;
    sugar: number;
};

/*
Custom Type Guard:
- Function that returns a boolean
- Uses `obj is Type` syntax
- Helps TypeScript understand object shape
*/

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
}

function serverOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        // item is narrowed to ChaiOrder
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai ${item}`;
}

/*
NOTE:
- Custom type guards are extremely useful
  when handling API responses or unknown data
*/

/* ---------------------------------------------------
   4️⃣ Discriminated Unions (Best Practice)
   --------------------------------------------------- */

type MasalaChai = {
    type: "masala";
    spiceLevel: number;
};

type GingerChai = {
    type: "ginger";
    spiceLevel: number;
};

type ElaichiChai = {
    type: "elaichi";
    spiceLevel: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

/*
NOTE:
- `type` is the discriminant property
- Each object has a fixed literal value
- Allows safe switch-case narrowing
*/

function makeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return "Masala Chai";

        case "elaichi":
            return "Elaichi Chai";

        case "ginger":
            return "Ginger Chai";

        default:
            // Ensures exhaustive checking
            const _exhaustiveCheck: never = order;
            return _exhaustiveCheck;
    }
}

/* ---------------------------------------------------
   ✅ Summary
   --------------------------------------------------- */

/*
✔ Type Narrowing improves type safety
✔ typeof → primitive types
✔ instanceof → class-based objects
✔ Custom type guards → object validation
✔ Discriminated unions → clean & scalable design
✔ Prevents runtime errors
*/
