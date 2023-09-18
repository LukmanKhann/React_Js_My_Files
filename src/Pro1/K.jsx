import { useState } from "react"

const K = () => {
    let [count,setCount] = useState(0)
    let incremenet = ()=>{
        setCount(count +1)
    }
    let decrement = ()=>{
        setCount(count -1)
    }
    let reset = ()=>{
        setCount(0)
    }
    // let handle = ()=>{
    //     console.log(coun);

    // }
  return (
    <div>
        {count}
        <button onClick={incremenet}>Incremenet</button>
        <button onClick={decrement} >Decremenet</button>
        <button onClick={reset} >reset</button>
      
    </div>
  )
}

export default K