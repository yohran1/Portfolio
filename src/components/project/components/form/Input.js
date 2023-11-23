import style from './Input.module.css'
import PropsType from 'prop-types'
export default function Input({type, name, placeholder, handleOnChange, value}){

    return(
        <div className={style.form_control}>
            <input 
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                handleOnChange={handleOnChange}
                value={value}
                required
            />
        </div>
    )
}
Input.propType = {
    type: PropsType.string.isRequired,
    name: PropsType.string.isRequired,
    placeholder: PropsType.string.isRequired
}
Input.defaultProps = {
    type: 'text',
    name: 'insira o name',
    placeholder: 'Insira o placeholder'
}