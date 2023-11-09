import style from './NavBar.module.css'
import icon from '../img/icons/icon-1.png'
import { Link } from 'react-router-dom'

export default function NavBar(){

    return(
        <div className={style.navBar}>
            <div className={style.logo}>
                <img src={icon} alt={icon} />
                <p>Bolos de Casamento Por Sr-MackFly</p>
            </div>

            <ul>
                <li><Link to='/projeto/srmackfly'>Página Inicial</Link></li>
                <li><Link to='/projeto/srmackfly'>Peça Online</Link></li>
                <li><Link to='/projeto/srmackfly'>Contato</Link></li>
                <li><Link to='/projeto/srmackfly'>Sobre</Link></li>
                <li><a href='http://localhost:3000/projeto/login'>Login | Registro</a></li>
            </ul>
        </div>
    )
}