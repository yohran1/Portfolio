import style from './LinkButton.module.css'
import { Link } from 'react-router-dom'

export default function LinkButton({to, text}){

    return( 
        <button className={style.btn}>
            <Link  to={to}>{text}</Link>
        </button>
        
    )
}