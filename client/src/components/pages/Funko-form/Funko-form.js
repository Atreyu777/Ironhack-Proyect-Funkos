import { Component } from 'react'
import FunkosService from '../../../service/funkos.service'
import { Container, Form, Button } from 'react-bootstrap'


class FunkoForm extends Component {

    constructor() {
        super()
        this.state = {
            owner: '',
            name: '',
            type: '',
            image:'',
            price:''

        }
        this.funkosService = new FunkosService()

    }
    render(){
        return(
            <Container>

            <Form onSubmit={e => this.handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.title} onChange={e => this.handleInputChange(e)} />
                </Form.Group>
                
                <Button variant="info" block type="submit">Button</Button>
            </Form>
        </Container>

        )
    }
}

export default FunkoForm