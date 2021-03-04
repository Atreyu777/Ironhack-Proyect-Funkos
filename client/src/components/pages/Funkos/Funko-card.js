import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FunkoCard = ({ name, type, image, description, _id, owner}) => {
    return (
        <Col md= {3} className="funko-card">
            <Card >
                <Card.Img variant="top" src={image} alt={name} />
                <Card.Body>
                    <h4><strong>{name}</strong></h4>
                    <h6>{type}</h6>
                    {/* <Card.Text>{description}</Card.Text> */}
                    <Link to={`/detalles/${_id}`} className="btn btn-info btn-sm btnn-block" style={{margin:5}}>Detalles</Link>
                    <Link to={`/${owner}`} className="btn btn-info btn-sm btnn-block">Contactar</Link>
                    {/* TODO aqui realmente seria abrir una ventana para enviar un mensaje al contacto */}
                </Card.Body>
            </Card>
        </Col>
    )
}


export default FunkoCard


