import { useState } from "react"

const Statearr = ()=>{
    let [obj,setObj] = useState({name : "lukman khan"})
    let [array,setArray] = useState(["tata"])
    return(
        <div>
            {array.map((x)=>{
                return(
                    <div>
                    <h1>oyy pols aa gai pols</h1>
                    <h1>oyy praa darooo na modii faiv karai hai modi faiivvv..</h1>
                    <h1>{x}</h1>
                    </div>
                )
            })}
        </div>
    )
}
export default Statearr