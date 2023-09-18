import { useState } from "react"

const State = () => {
    let [data,setData]  = useState("lukman")
  return (
    <div>
      {data}
    </div>
  )
}

export default State