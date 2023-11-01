import style from './Input.module.css'

export default function Input({type, text, name, placeholder, handleOnChange, value}){
    if(name === 'email'){
        <i className="fa-solid fa-envelope"></i>                
    }else{
        <i className="fa-solid fa-key"></i>
    }
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
                {/* <i className="fa-solid fa-envelope"></i> */}
                {/* <i className="fa-solid fa-key"></i> */}
                <i></i>
                <input 
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    value={value}
                />
        </div>
    )
}