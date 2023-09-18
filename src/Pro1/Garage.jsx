import Menu from "./Menu"
import style from "./garage.module.css"

const Garage = () => {
  return (
    <div>

        <section id={style.nav}>
            <div id={style.list}> <Menu/> </div>
            
        </section>
      
    </div>
  )
}

export default Garage