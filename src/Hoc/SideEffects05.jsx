import { useEffect, useState } from "react"

const SideEffect05 = ()=>{
    let [count,setCount] = useState(0)
    let [count1,setCount1] = useState(10)
    let a = ()=>{
        setCount(count +1)

    }
    let b = ()=>{
        setCount1(count1 + 1)
    }
    useEffect(()=>{
        console.log("good morning");
    },[count,count1])

    return(
        <div>
            {count}
            <button onClick={a}>Increment</button> <br />
            {count1}
            <button onClick={b}>Increment1</button>

        </div>
    )
}
export default SideEffect05