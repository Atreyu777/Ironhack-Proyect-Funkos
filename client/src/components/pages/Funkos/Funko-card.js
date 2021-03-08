import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const FunkoCard = ({ name, type, image, _id, price, owner, user_id }) => {

  
    return (
        <Col md= {3} className="funko-card">
            <Card >
                <Card.Img variant="top" src={image} alt={name} />
                <Card.Body>
                    <h4><strong>{name}</strong></h4>
                    <h6>{type}</h6>
                    <p>{price} €</p>

                    {
                        owner === user_id

                            ?
                            <>
                            <Link to={`/detalles/${_id}`} className="btn btn-info" style={{margin:10}}>Detalles</Link>
                            <Link as="button" className="btn btn-info">Editar</Link>
                            </>
                            :
                            <>
                            <Link to={`/detalles/${_id}`} className="btn btn-info" style={{margin:10}}>Detalles</Link>
                            <Link to={`/${owner}`} className="btn btn-info">Contactar</Link>
                            </>
                    }
                    
                    {/* TODO aqui realmente seria abrir una ventana para enviar un mensaje al contacto
                    /que el boton de editar te saque una Modal para modificar los datos
                    /añadir el botón borrar para eliminar el funko*/}
                    {/* <Link as="button" className="btn btn-info" onClick={() => this.showEditForm()}>Editar</Link> */}
                </Card.Body>
            </Card>
        </Col>
    )
}


export default FunkoCard


