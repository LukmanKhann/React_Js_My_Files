import { useContext } from "react"
import { userData } from "../../App"
const Alpha = ()=>{
    let Content = useContext(userData)
   
    return(
        <div>
         {Content}   good morning
        </div>
    )
}
export default Alpha