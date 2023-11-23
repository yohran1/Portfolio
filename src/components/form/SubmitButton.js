import style from './SubmitButton.module.css'
import PropsType from 'prop-types'

export default function SubmitButton({text}){
    return (
        
            <button className={style.btn}>{text}</button>
        
    )
}
SubmitButton.propTypes = {
    text: PropsType.string.isRequired
}
SubmitButton.defaultProps = {
    text: 'Insira o nome do Button'
}