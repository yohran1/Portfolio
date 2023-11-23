import style from './CardCakes.module.css'
import PropType from 'prop-types'

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
// const imagem = CardCakes.propType.img = 'https://via.placeholder.com/150'
CardCakes.propType = {
    title: PropType.string.isRequired,
    information: PropType.string.isRequired,
    price: PropType.string.isRequired && PropType.number.isRequired,
    img: PropType.string.isRequired
}
CardCakes.defaultProps = {
    title: 'Card',
    information: 'Information Card',
    price: '0,00' && Number(0),
    img: 'https://via.placeholder.com/150'
}