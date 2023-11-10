import Container from '../../layout/Container'
import Footer from '../../layout/Footer'
import NavBar from '../components/NavBar'

export default function SrMackfly(){

    return (
        <Container customClass='column'>
            <NavBar />
            <h1>Home</h1>

            

            <footer>Footer Information</footer>
            <Footer />
        </Container>
    )
}