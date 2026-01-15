import { useState } from "react"

export function Counter() {
    const [count,setCount]=useState<number>(0);
    return(
        <div>
            <h2>Counter Component:{count}</h2>
            <button onClick={()=>setCount((c)=>c+1)}>Order onr morw</button>
        </div>
    )
}