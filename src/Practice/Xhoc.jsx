import { useState } from "react"

const Xhoc = (WrappedComp) => {
    function Nestedhoc(){
        let [count,setCount] = useState(0)
        let incre = ()=>{
            setCount(count+1)
        }
        return(
            <div>
                <WrappedComp data = {count} value = {incre}/>
                
            </div>
        )
        
    }
    return Nestedhoc
  
}

export default Xhoc