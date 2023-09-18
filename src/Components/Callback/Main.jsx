import { useCallback, useState } from "react"
import Count from "./Count"
import Button from "./Button"

const Main = ()=>{
    let [age,setAge] = useState(25)
    let [salary,setSalary] = useState (5000)
    let increAge = useCallback(()=>{  setAge(age +1) },[age])
    let increSalary = useCallback( ()=>{ setSalary(salary +5000) },[salary])
    return(
        <div>
            <Count data = {age}> Age</Count>
            <Button Fun = {increAge}>increAge</Button> 
            <Count data = {salary}>Salary</Count>
            <Button Fun = {increSalary}>increSalary</Button>

        </div>

    )
}
export default Main