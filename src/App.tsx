
import './App.css'
import { ChaiCard } from './component/ChaiCard'
import ChaiList from './component/ChaiList'
import { Counter } from './component/Counter'
import type { Chai } from './types'

function App() {
  // const [count, setCount] = useState(0)
  const meanu: Chai[]=[
    {id:1,name:"Masala Chai",price:2.5},
    {id:2,name:"Adrak Chai",price:3.0}
  ]



  return (
    <>
     <div>
       <h1>Vite + React</h1>
       <ChaiCard name="Green Tea" price={2.50} isSpecial={true} />
       <ChaiCard name="Green Tea" price={2.50} isSpecial={true} />
     </div> 
     <div>
        <Counter/>
     </div>
     <div>
      <ChaiList items={meanu}/>
     </div>
   
     
    </>
  )
}

export default App
