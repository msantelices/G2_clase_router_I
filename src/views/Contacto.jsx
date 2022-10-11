import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Contacto = ()=> {
    return(
        <Container className='text-center view'>
            <h1 className="pt-5">Contáctanos</h1>
            <h6>Escríbenos a contacto@dogstel.com</h6>

            <Link to="/" className='mt-5 btn btn-primary'>Home</Link>
        </Container>
    )
}

export default Contacto