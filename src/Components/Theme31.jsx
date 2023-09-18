import Theme23 from "./theme31.module.css"
const Theme31 = ()=>{
    let Light = ()=>{
        document.body.style.background = "white"
        document.body.style.color = "Black"
    } 
    let Dark = ()=>{
        document.body.style.background = "Black"
        document.body.style.color = "white"
    }
    return(
        <div id={Theme23.theme}>
            <h1>dark and light theme</h1>
            <input type="radio" name="a" id="" onClick={Light} />
            <label htmlFor="" >Dark</label>
            <input type="radio" name="a" id="" onClick={Dark} />
            <label htmlFor="" ></label>
        </div>
    )
}
export default Theme31