import style from './Message.module.css'

export default function Message({message}){

    return(
        <div className={style.message}>
            <p>{message}</p>
        </div>
    )
}