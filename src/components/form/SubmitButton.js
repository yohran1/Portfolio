import style from './SubmitButton.module.css'

export default function SubmitButton({text}){
    return (
        
            <button className={style.btn}>{text}</button>
        
    )
}