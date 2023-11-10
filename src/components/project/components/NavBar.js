import style from './NavBar.module.css'
import icon from '../img/icons/icon-1.png'
import { Link } from 'react-router-dom'

export default function NavBar(){

    return(
        <nav className={style.navBar}>
            <div className={style.logo}>
            <Link to='/projeto/srmackfly'>
                <img src={icon} alt={icon} />
                <p>Bolos de Casamento Por Sr-MackFly</p>
            </Link>
            </div>

            <div className={style.nav_list}>
                <ul>
                    <li><Link to='/projeto/srmackfly'>Página Inicial</Link></li>
                    <li><Link to='/projeto/srmackfly'>Peça Online</Link></li>
                    <li><Link to='/projeto/srmackfly'>Contato</Link></li>
                    <li><Link to='/projeto/srmackfly'>Sobre</Link></li>
                </ul>
            </div>
            
            <div className={style.login_btn}>
                <a href='http://localhost:3000/projeto/login'><button>Login</button></a>
            </div>
        </nav>
    )
}