import { useState } from "react"

const Hoc = (WrappedComp) =>{
    function NestedHoc (){
        let [ count,setCount] = useState(0)
        let incre = ()=>{
            setCount(count+1)
        }
        return(
            <div>          
                <WrappedComp data = {count} fun = {incre}/>
            </div>
        )

    }
    return NestedHoc
}
export default Hoc