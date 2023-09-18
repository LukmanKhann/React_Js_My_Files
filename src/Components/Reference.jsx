import { useRef } from "react"

const Reference = ()=>{
    let demoRef = useRef()
    console.log(demoRef)
    let changecolor=()=>{
        demoRef.current.style.background= "red";

    }
    return(
        <div>
            <h1 ref={demoRef}>Hello Reference</h1>
            <h2 >Hello World</h2>
            <button onClick={changecolor}>Change color</button>
        </div>
    )
}
export default Reference