//OOPS in Ts

class Chai{
    flavore:string;
    price:number;

    constructor(flavore:string,price:number){
        this.flavore=flavore;
        this.price=price;
    }

}

const masalaChai=new Chai("Masala",10);

// Access Modifiers

class Chaii{
    public flavore:string="Masala";
    private secretIngredients="Cardamon"

    reveal(){
        return this.secretIngredients
    }

    protected shopName="Chai Corner "
}

class Branch extends Chaii{
    getName(){
        return this.shopName; // we can only access protected with the same class or extended class
    }
}

const C= new Chaii()
C.reveal() // No direct access to private variable 

class Wallet{
    #balance=100 //private 

    getBalance(){
        return this.#balance
    }
}

class Cup{
    readonly capacity:number=250

    constructor(capacity:number){
        this.capacity=capacity;
    }
}

class MordernChai {
    private _sugar=2 //convention

    //getter
    get sugar(){
        return this._sugar
    }

    //setter
    set sugar(value:number){
        this._sugar=value
    }
}

const C1= new MordernChai()
C1.sugar;

class EkChai{
    static shopName ="ChaiCode"

    constructor(public falvore:string){}
}
console.log(EkChai.shopName)

// abstract class 
abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(){
        console.log("Brewing Chai")
    }
}

//Add examplw do Polymorphism , encapsulation , inhertance , abstraction

class Heater{
    heat(){}
}
// Composition 
class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }


}