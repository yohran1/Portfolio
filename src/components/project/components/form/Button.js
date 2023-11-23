import style from './Button.module.css'
import PropsType from 'prop-types'

export default function Button({text}){
    return(
        <button className={style.btn}>{text}</button>
    )
}
Button.propTypes = {
    text: PropsType.string.isRequired
}
Button.defaultProps = {
    text: 'Insira o nome do Button'
}