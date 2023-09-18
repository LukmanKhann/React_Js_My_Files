import { useState } from "react";
const State = ()=> {
    let [clickme,setClickme] = useState(" Hungry ")
    let eat = ()=> {setClickme(" finally my stomach is full ")}
    return(
        <div>
            {clickme}
            <button onClick={eat}>PressMe</button>
        </div>
    )
}
export default State