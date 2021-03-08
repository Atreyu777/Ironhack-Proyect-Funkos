import { Component } from 'react'
import FunkosService from '../../../service/funkos.service'
import { Container, Form, Button, Col } from 'react-bootstrap'


class FunkoForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            type: 'NORMAL',
            image: '',
            price: ''

        }
        this.funkosService = new FunkosService()

    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.funkosService
            .saveFunko(this.state)
            .then(() => {
                this.props.closeModal()
                this.props.refreshList()
             })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>
                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" name="description" value={this.state.description} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridType">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control as="select"  name="type" value={this.state.type} onChange={e => this.handleInputChange(e)}>
                                <option>NORMAL</option>
                                <option>EXCLUSIVE</option>
                                <option>GITD</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridImage">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="text" name="image" value={this.state.image} onChange={e => this.handleInputChange(e)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" name="price" value={this.state.price} onChange={e => this.handleInputChange(e)} />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="info" block type="submit">Crear Funko</Button>
                </Form>
            </Container>

        )
    }
}

export default FunkoForm