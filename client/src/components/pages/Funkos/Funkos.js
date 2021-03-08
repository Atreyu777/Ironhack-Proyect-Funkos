import { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import FunkosList from './Funkos-list'
import FunkosService from '../../../service/funkos.service'
import './Funkos.css'

class Funkos extends Component {

    constructor() {
        super()
        this.state = {
            funkos: [],
            name: ""
        }

        this.funkosService = new FunkosService()

    }

    componentDidMount() {
        this.loadFunkos()
    }

    loadFunkos() {
        this.funkosService
            .getFunkos()
            .then(response => this.setState({ funkos: response.data }))
            .catch(err => console.log(err))
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.funkosService
            .searchFunkos(this.state.name)
            .then((res) => {
                this.setState({ funkos: res.data})

            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Container>
                    <h1>Listado de Funkos en venta</h1>
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group>
                            <Form.Label>Busca tu Funko</Form.Label>
                            <Form.Control name="name" type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} placeholder="Escribe aquí el nombre del Funko que buscas" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Buscar</Button>
                    </Form>
                    <hr />
                    <FunkosList funkos={this.state.funkos} loggedUser={this.props.loggedUser} refreshList={() => this.loadFunkos()}/>
                </Container>
            </>
        )
    }
}

export default Funkos