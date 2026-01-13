// Interface -> To shape the object/Data

interface Chai{
    flavore:string
    price:number
    milk?:boolean
}

// Defining the stucture of the object 
const masala:Chai={
    flavore:"masala",
    price:30
}

interface Shop{
    readonly id:number
    name:string
}

const s:Shop={
    id:1,
    name:"Chai Code"
}
//s.id=2 Not allowed 

interface DiscountCal{
    (price: number): number
}

const apply50: DiscountCal=(p)=> p*0.5

interface TeaMachine{
    start(price:number): void
    stop():void
}

const machine:TeaMachine={
    start(){
        console.log("start")
    },
    stop(){
        console.log("stop")
    }
}

interface ChaiRating {
    [flavore:string]: number
}

const rating: ChaiRating={
    masala:4.5,
    ginger:4,
}

interface User{
    name:string
}

interface User{
    age:number
}
//Merging
const u:User={
    name:"Chris",
    age:42
}

interface A {a:string}
interface B {b:string}

interface C extends A , B {}





