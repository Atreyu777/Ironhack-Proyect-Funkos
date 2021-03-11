import { Container } from 'react-bootstrap'


const IndexPage = ({ loggedUser }) => {

    return (
        <Container>
            {
                loggedUser
                    ?
                    <>
                        <h1>Ahora sí {loggedUser?.username}, haz FunkMatch!!!</h1>
                        <br />
                        <h2>Busca tu <strong>Funko</strong>  en la lista o búscalo por nombre!!!</h2>
                    </>
                    :
                    <>
                        <h1>Bienvenid@ a FunkInder!!!</h1>
                        <h2><code>Encuentra tu FunkMatch entre miles de usuarios!!!</code></h2>
                        <br />
                        <h2>Regístrate e inicia sesión.</h2>
                        <h2>Compra contactando con el usuario.</h2>
                        <h2>O súbelo y vende ese Funko que te regalo tu tía sin saber qué era.</h2>
                    </>
            }
        </Container>
    )
}

export default IndexPage