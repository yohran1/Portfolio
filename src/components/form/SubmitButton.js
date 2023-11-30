import style from './SubmitButton.module.css'
import PropsType from 'prop-types'

export default function SubmitButton({text, onClick}){
    return (
        
            <button type='submit' className={style.btn} onClick={onClick}>{text}</button>
        
    )
}
SubmitButton.propTypes = {
    text: PropsType.string.isRequired
}
SubmitButton.defaultProps = {
    text: 'Insira o nome do Button'
}