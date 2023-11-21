import style from './PecaOnline.module.css'
import Container from '../../../layout/Container'
import NavBar from '../NavBar'
import Footer from '../../../layout/Footer'
import FormEmail from '../form/FormEmail'

export default function Sobre(){


    return(
        <Container customClass='min-height'>
            <NavBar />
            <section className={style.section}>
                <div className={style.container}>
                    <div className={style.box_contato}>
                        <h1>CONTATE-ME</h1>
                        <p>Sou um parágrafo. Clique aqui para adicionar o seu próprio texto e editar. Sou um ótimo espaço para você contar sua história para que seus usuários saibam um pouco mais sobre você.</p>
                        <p>(555) 1234-5678 | INFO@MEUSITE.COM | PEDIDOS SR-MACKFLY ONLINE</p>
                        <p>Coletas são possíveis na Av. Bernardino de Campos, 98 Santa Catarina - SC 12345-678, BRAZIL</p>
                    </div>
                    <FormEmail />
                    

                </div>

            </section>
            <Footer />
        </Container>
    )
}