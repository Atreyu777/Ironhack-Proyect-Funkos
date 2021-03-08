import { Container } from 'react-bootstrap'


const IndexPage = ({ loggedUser }) => {

    return (
        <Container>
        {
            loggedUser
                ?
                <h1>Bienvenid@ {loggedUser?.username}</h1>
                :
                <h1>Esta es la página principal de FunkInder!!!</h1>
        }
            
        </Container>
    )
}

export default IndexPage