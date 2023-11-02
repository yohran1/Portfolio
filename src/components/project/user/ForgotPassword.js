import Input from '../../form/Input'
import Container from '../../layout/Container'
import style from './Login.module.css'
import SubmitButton from '../../form/SubmitButton'
import LinkButton from '../../layout/LinkButton'
import { useState } from 'react'
import Message from './Message'

export default function ForgotPassword(){
    const [message, setMessage] = useState('Aguardando confirmação do usuário!')

    return(
        <Container>
            <form className={style.formLogin}>
                <div className={style.headerLogin}>
                    <h2>Digite nova senha!</h2>
                </div>
                <div className={style.inputsLogin}>
                    <Input 
                        type='password'
                        name='password'
                        placeholder='Digite nova senha!'
                    />
                    <Message  message={message}/>
                    
                    <div className={style.buttons}>
                        <SubmitButton text='Salvar'/>   
                        <LinkButton to='/projeto/login' text='Voltar' />
                    </div>
                </div>
            </form>
        </Container>
    )
}