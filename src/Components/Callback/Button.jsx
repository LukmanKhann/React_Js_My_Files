import React from "react";
const Button = (y)=>{
    console.log("rendering",y.children);
    return(
        <div>
            <button onClick={y.Fun}>{y.children}</button>
            
        </div>

    )
}
export default React.memo(Button)