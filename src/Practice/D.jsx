import { useContext } from "react"
import { userData } from "../App"

const D = () => {
    let content = useContext(userData)
  return (
    <div>
        {content} good morning
      
    </div>
  )
}

export default D