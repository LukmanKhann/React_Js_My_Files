import { useState } from "react"

const Task1=()=>{
    let [count ,setCount] = useState(0)
    let increment = ()=>{
        setCount(count +1)
    } 
    let decrement = ()=>{
        setCount(count -1)
    }
     let reset = ()=>{
        setCount(0)
    }
    return(
        <div>
            {count} 
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <i class="fa-solid fa-heart fa-beat-fade fa-lg" onClick={increment}></i>
            <i class="fa-solid fa-hand-holding-droplet"></i>
            <i class="fa-solid fa-hand-holding-droplet fa-fade"></i>
            <i class="fa-solid fa-hands-holding-heart fa-beat"></i>
            <i class="fa-solid fa-hands-holding-heart fa-beat"></i>
        </div>


    )
}
export default Task1