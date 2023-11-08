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
                <li><a href='https://www.facebook.com/yohran.venancio/'><FaFacebookSquare /></a></li>
                <li><a href='https://www.instagram.com/yohran_kallahari/'><FaInstagramSquare /></a></li>
                <li><a href='https://www.linkedin.com/in/yohran-ven%C3%A2ncio-96017b120/'><FaLinkedin /></a></li>
            </ul>
        </footer>
    )
}