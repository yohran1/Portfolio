import Container from '../../layout/Container'
import { Link } from 'react-router-dom'
import style from './Login.module.css'
import Facebook from './img/facebook.png'
import GitHub from './img/github.png'
import Input from '../../form/Input'

export default function Login(){

    return(
        <Container>
            <form className={style.formLogin} id="form">
                <div className={style.headerLogin}>
                    <h1>Login</h1>
                    <i className="fa-solid fa-moon icon-moon"> <div className={style.i_txt}>theme</div></i>
                </div>
                <div className={style.inputsLogin}>
                    <Input 
                        type='text'
                        text='Email'
                        name='email'
                        placeholder='Digite seu email!'
                    />
                    <Input 
                        type='password'
                        text='Password'
                        name='password'
                        placeholder='Digite sua senha!'
                    />
                </div>
                    <button type="submit" className={style.login_btn}>Login</button>
                <div className={style.linksLogin}>
                <div className={style.forgot_password}>
                    <a href="https://jsonplaceholder.typicode.com/todos">Esqueceu sua senha?</a>
                </div>
                    <div className={style.forgot_password}>
                        <Link to="/projeto/register">Register</Link>
                    </div>
                </div>
                <div className={style.social_media_login}>
                    <a href="https://www.facebook.com/yohran.venancio/">
                        <img src={Facebook} alt="Facebook-logo" />
                    </a>
                    <a href="https://github.com/yohran1">
                        <img src={GitHub} alt="gitHub-logo" />
                    </a>
                </div>
            </form>
        </Container>
    )
}