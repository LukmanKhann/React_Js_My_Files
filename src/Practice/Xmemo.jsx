import { useMemo, useState } from "react"

const Xmemo = ()=>{
    let [count1,setCount1] = useState(0)
    let [count2,setCount2] = useState(0)

    let incre1 = ()=>{
        setCount1(count1 +1)
    }
    let incre2 = ()=>{
        setCount2(count2+1)
    }
    let Even = useMemo(()=>{
        let i = 0 
        while(i<=100000000) i++
        return count1 %2 ==0
    },[])

    return(
        <div>
            {count1} <br />
            <button onClick={incre1}>Increment1</button> <br />
            <h1>{Even?"even":"odd"}</h1>
            <button onClick={incre2}>Increment2</button><br />
            {count2}

        </div>

    )
    

}
export default Xmemo