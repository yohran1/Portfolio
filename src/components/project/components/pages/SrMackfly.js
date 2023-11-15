import style from './SrMackfly.module.css'
import Container from '../../../layout/Container'
import Footer from '../../../layout/Footer'
import NavBar from '../NavBar'
import cakes_1 from '../../img/cakes/bolo-layout-4.jpg'
import CakesSection from '../CakesSection'
import Carrossel from '../Carrossel'

export default function SrMackfly(){

    return (
        <Container customClass='column'>
            <NavBar />
            <div className={style.container}>
                <div className={style.cakes_1}>
                    <img src={cakes_1} alt={cakes_1} />
                </div>
                <CakesSection />
                <Carrossel />
            </div>

            

            <footer>Footer Information</footer>
            <Footer />
        </Container>
    )
}