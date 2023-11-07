import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { TiUserOutline } from 'react-icons/ti'
import style from './Footer.module.css'


export default function Footer(){

    return (
        <footer className={style.footer}>
            <TiUserOutline />

            <p>Yohran Kallahari | Sr-Mackfly &copy;</p>

            <ul>
                <li><FaFacebookSquare /></li>
                <li><FaInstagramSquare /></li>
                <li><FaLinkedin /></li>
            </ul>
        </footer>
    )
}