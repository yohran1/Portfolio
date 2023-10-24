import style from './Container.module.css'

export default function Container(props){

    return(
        <div className={`${style.container} ${style[props.customClass]}`}>
            {props.children}
        </div>
    )
}