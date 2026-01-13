// Generic

function wrapInArray<T>(item:T):T[]{
    return [item]
}

wrapInArray("Masala")
wrapInArray(42)
wrapInArray({flavore:"Ginger"})

function pair<A,B>(a:A,b:B):[A,B]{
    return[a,b]
}

pair("masala",20)

//Generic Interface 

interface Box<T>{
    content:T
}

const numerBox: Box<number>= {content:10}