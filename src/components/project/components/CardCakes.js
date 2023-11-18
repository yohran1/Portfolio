import style from './CardCakes.module.css'

export default function CardCakes({title, information, price, img}){

    return(
        <div className={style.card}>
            <div className={style.text}>
                <h4>{title}</h4>
                <p>{information}</p>
                <span>R${price}</span>
            </div>
            <div className={style.img}>
                <img src={img} alt={img}/>
            </div>
        </div>
    )
}