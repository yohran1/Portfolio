import Container from "../../../layout/Container";
import HeaderLocation from "../HeaderLocation";
import NavBar from "../NavBar";
import style from './PecaOnline.module.css'



export default function PecaOnline(){

    return (
        <Container customClass='column'>
        <NavBar />

        <section className={style.section}>
            <HeaderLocation />

        </section>
        

        </Container>
    )
}