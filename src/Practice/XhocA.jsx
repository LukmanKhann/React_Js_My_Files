import Xhoc from "./Xhoc"

const XhocA = (x) => {
    console.log(x);
  return (
    <div>
        {x.data}
        <button onClick={x.value}>Increment</button>

      
    </div>
  )
}

export default Xhoc(XhocA)