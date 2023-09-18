import style from "./goodtea.module.css"
const Goodtea = ()=>{
    return(
        <div>
            <main id={style.heading}>
                <p>LAST ORDERS for standard delivery pre-Easter will need to be placed by midday Tuesday 4th April</p>
            </main>
            
            <section className={style.body}>
                
                <div id={style.logo}>
                    <img src="https://cdn.shopify.com/s/files/1/0399/9704/6934/files/Logo-Good-and-Proper_300x300.png?v=1614288596" alt="" />
                </div>
                <div id={style.navbar}>
                    <ul>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">SUBSCRIBE</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">WHOLESALE</a></li>
                    </ul>
                </div>
                <div id={style.searchbar}>
                    
                    <input type="search" name="" id="" placeholder="Search"      />
                    
                 <a href=""> <i class="fa-solid fa-user fa-xl"></i> </a> 
                <a href="">  <i class="fa-sharp fa-solid fa-cart-shopping fa-lg"></i></a>
                </div>
                
            </section>
            <section id={style.img}></section>
            
        </div>
    )
}
export default Goodtea