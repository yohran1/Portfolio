import style from './Input.module.css'

export default function Input({type, name, placeholder, handleOnChange, value}){
    
    function Icon(text){
        if(text === 'email'){
            return <i className="fa-solid fa-envelope"> </i>                
        }else{
           return <i className="fa-solid fa-key"> </i>
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