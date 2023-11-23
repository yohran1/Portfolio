import style from './Input.module.css'
import PropsType from 'prop-types'

export default function Input({type, name, placeholder, handleOnChange, value}){
    
    function Icon(text){
        if(text === 'email'){
            return <i className="fa-solid fa-envelope"> </i>                
        }else if(text === 'password'){
           return <i className="fa-solid fa-key"> </i>
        }else{
            return <i className="fa-solid fa-user"></i>
        }
    }
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{Icon(name)}</label>
                <input 
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleOnChange}
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