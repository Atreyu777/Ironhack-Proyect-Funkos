import { Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const FunkoCard = ({ name, type, image, _id, price, owner, user_id, deleteFunko }) => {

    return (
        <Col md={3} className="funko-card">
            <Card >
                <Card.Img variant="top" src={image} alt={name} style={{ width: 245, height: 290 }} />
                <Card.Body >
                    <h4><strong>{name}</strong></h4>
                    <h6>{type}</h6>
                    <p>{price} €</p>
                    {
                        owner === user_id

                            ?
                            <>
                                <Link to={`/detalles/${_id}`} className="btn btn-info" style={{ margin: 10 }}>Detalles</Link>
                                <Button onClick={() => deleteFunko(_id)} className="btn btn-info">Borrar</Button>
                            </>
                            :
                            <>
                                <Link to={`/detalles/${_id}`} className="btn btn-info" style={{ margin: 10 }}>Detalles</Link>
                                <Link to={`/nueva-conversacion/con/${owner}`} className="btn btn-info">Contactar</Link>
                            </>
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default FunkoCard


