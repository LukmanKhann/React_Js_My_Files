import { useState } from "react"

const AddSub = ()=>{
    let [num1,setNum1]=useState("")
    let [num2,setNum2]=useState("")
    let num1Data = (e)=>{
        setNum1(e.target.value)
    } 
    let num2Data = (e)=>{
        setNum2(e.target.value)
    }
    let add = ()=>{
        let a = Number(num1)
        let b = Number(num2)
        console.log(a+b);
    }
    let sub = ()=>{
        console.log(num1 - num2);
    }
    let multi = ()=>{
        console.log(num1 * num2);
    }
    return(
        <div>
            <label htmlFor="">Number1</label>
            <input type="number" value={num1} onChange={num1Data} /><br />
            <label htmlFor="">Number2</label>
            <input type="number" value={num2} onChange={num2Data} />
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={multi}>*</button>

        </div>
    )
}
export default AddSub