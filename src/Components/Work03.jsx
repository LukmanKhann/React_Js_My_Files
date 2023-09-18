import { useState } from "react"

const Work3 = ()=>{
    let [num1, setNum1] = useState("")
    let [num2, setNum2] = useState("")
    let [result, setResult] = useState(0)
    
    let num1Data = (e)=>{
        setNum1(e.target.value)
    }
    let num2Data = (e)=>{
        setNum2(e.target.value)
    }
    let add = ()=>{
        let a = Number(num1)
        let b = Number (num2)
        // console.log(a+b);
        setResult(a+b)


    }
    let sub= ()=>{
        // console.log(num1 - num2)
        setResult(num1 - num2)

    }
    let multi = ()=>{
        // console.log(num1 * num2)
        setResult(num1 * num2)
    }
    

    return(
        <div>
            <label htmlFor="">Num1</label>
            <input type="number" value={num1} onChange={num1Data} /><br />
            <label htmlFor="">Num2</label>
            <input type="number"  value={num2} onChange={num2Data} />
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={multi}>*</button>
            <h1>{result}</h1>

        </div>
    )
}
export default Work3