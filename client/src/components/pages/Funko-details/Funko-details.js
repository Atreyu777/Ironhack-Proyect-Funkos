import { Component } from 'react'
import FunkosService from '../../../service/funkos.service'
import { Container, Row, Col } from 'react-bootstrap'

class FunkoDetails extends Component {
    constructor() {
        super()
        this.state = {
            funko: undefined
        }
        this.funkosService = new FunkosService()
    }

    componentDidMount() {

        const funko_id = this.props.match.params.funko_id

        this.funkosService
            .getFunko(funko_id)
            .then(response => this.setState({ funko: response.data }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <h1>Funko: {this.state.funko?.name}</h1>
                        <hr />
                        <h3><strong>Tipo: </strong><strong>{this.state.funko?.type}</strong></h3>
                        <h3>Detalles</h3>
                        <h4>{this.state.funko?.description}</h4>
                        <br />
                        <h3>Precio: {this.state.funko?.price}€</h3>
                    </Col>
                    <Col md={4}>
                        <img style={{ width: '100%' }} src={this.state.funko?.image} alt={this.state.funko?.name}></img>
                    </Col>
                </Row>

            </Container>


        )
    }
}

export default FunkoDetails