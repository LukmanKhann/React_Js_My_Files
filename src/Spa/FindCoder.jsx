import Btn from "./Btn"
import Logo from "./Logo"
import Menu from "./Menu"
import style from "./findcoder.module.css"
const FindCoder = ()=>{
    return(
        <section id={style.nav}>
            <article>
                <div id={style.Logo}><Logo/></div>
                <div id={style.Menu}> <Menu/> </div>
                <div id={style.Button}> <Btn/> </div>
            </article>

        </section>
    )
}
export default FindCoder