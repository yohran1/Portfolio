import Container from "../../layout/Container";
import Input from "../../form/Input";
import style from './Login.module.css'
import { Link } from 'react-router-dom'
import Facebook from './img/facebook.png'
import GitHub from './img/github.png'
import SubmitButton from "../../form/SubmitButton";

export default function Register(){

    return(
        <Container>
            <form className={style.formLogin} id="form">
            <div className={style.headerLogin}>
                <h1>Registro</h1>
            </div>

            <div className={style.inputsLogin}>
                <Input 
                    type='text'
                    name='name'
                    placeholder='Digite seu nome!'
                />
                <Input 
                    type='email'
                    name='email'
                    placeholder='Digite seu email!'
                />
                <Input 
                    type='password'
                    name='password'
                    placeholder='Digite sua senha!'
                />
            </div>
                <SubmitButton text='Registro'/>
            <div className={style.has_registration}>
                <Link to="/projeto/login">Já possui cadastro?</Link>
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