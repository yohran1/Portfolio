import style from './HeaderLocation.module.css'

export default function HeaderLocation(){


    return(
        <header className={style.header}>
            <p>Retirada, o mais rápido possível (em 15 minutos)</p>
            <a href="/projeto/pecaOnline">Alterar</a>
        </header>
    )
}