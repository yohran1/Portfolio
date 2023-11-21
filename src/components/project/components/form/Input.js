import style from './Input.module.css'

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