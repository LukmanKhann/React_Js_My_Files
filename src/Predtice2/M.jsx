import { useCallback, useState } from "react"
import G from "./G"
import H from "./H"
const M = () => {
    let [sal,setSalary ] = useState(30000)
    let [age,setAge] = useState(23)
    let Increage = useCallback(()=>{
        setAge(age+1)
    })
    let Incresal = useCallback(()=>{
        setSalary(sal+5000)
    })
  return (
   
    <div>
        <G a = {age}>Age</G>
        <H b = {Increage}>Increage</H>
        <G a = {sal} >Sal</G>
        <H b = {Incresal}>Incresal</H>
      
    </div>
  )
}

export default M