import style from './SrMackfly.module.css'
import Container from '../../../layout/Container'
import Footer from '../../../layout/Footer'
import NavBar from '../NavBar'
import cakes_1 from '../../img/cakes/bolo-layout-4.jpg'
import cakes_2 from '../../img/cakes/bolo-branco.webp'

export default function SrMackfly(){

    return (
        <Container customClass='column'>
            <NavBar />
            <div className={style.container}>
                <div className={style.cakes_1}>
                    <img src={cakes_1} alt={cakes_1} />
                </div>
                
                <div className={style.cakes_info}>
                    <div className={style.info}>
                        <h2>MEUS BOLOS SÃO CONFECCIONADOS COM AMOR</h2>
                        <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em “Editar Texto” ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo espaço para você contar sua história.</p>
                    </div>

                    <div className={style.img_cake}>
                        <img src={cakes_2} alt={cakes_2} />
                    </div>
                </div>

                
            </div>

            

            <footer>Footer Information</footer>
            <Footer />
        </Container>
    )
}