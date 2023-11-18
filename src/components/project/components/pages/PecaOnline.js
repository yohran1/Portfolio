import Container from "../../../layout/Container";
import HeaderLocation from "../HeaderLocation";
import NavBar from "../NavBar";
import style from './PecaOnline.module.css'
import Footer from '../../../layout/Footer'



export default function PecaOnline(){

    return (
        <Container customClass='column min-height'>
        <NavBar />
        
        <section className={style.section}>
        <div className={style.container}>
            <HeaderLocation />
            

        </div>
        </section>
        

        
        
        <Footer />
        </Container>
    )
}