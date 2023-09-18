import { useState } from "react"

const Increee = () => {
    let [count,setCount] = useState(0)
    let Increment = ()=>{
        setCount(count +1)

    }
     let Decrement = ()=>{
        setCount(count -1)

    }
    let reset = ()=>{
        setCount(0)
    }
     
  return (
    <div>
        {count}
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Increee