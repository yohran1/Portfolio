import Container from "../../../layout/Container"
import style from './PecaOnline.module.css'
import NavBar from "../NavBar"
import Footer from "../../../layout/Footer"

export default function Sobre(){

    return(
        <Container customClass='min-height'>
            <NavBar />
            <section className={style.section}>
                <div className={style.container}>
                    <h1>Sobre!</h1>
                </div>
            </section>
        <Footer />
        </Container>
    )
}