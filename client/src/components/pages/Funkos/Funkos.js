import { Component, useDebugValue } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import FunkosList from './Funkos-list'
import FunkosService from '../../../service/funkos.service'
import FunkoForm from '../Funko-form/Funko-form'
import './Funko-card.css'

class Funkos extends Component {

    constructor() {
        super()
        this.state = {
            funkos: [],
            showForm: false
        }

        this.funkosService = new FunkosService()

    }



    componentDidMount() {
        this.loadFunkos()
    }

    loadFunkos() {
        this.funkosService
            .getFunkos()
            .then(response => {
                console.log(response)
                this.setState({ funkos: response.data })
            })
            .catch(err => console.log(err))
    }

    toggleModalForm() {
        this.setState({ showForm: true })
        // TEO Si lo dejo en true me aparece la ventata como es logico pero al cambiarlo a value no hace nada
    }

    render() {
        return (
            <>
                <Container>
                    <h1>Listado de Funkos</h1>
                    <Button variant="info" onClick={() => this.toggleModalForm()}>Crea aquí tu Funko</Button>

                    {/* TODO aqui usar LoggedUser cuando cree el botón */}
                    <hr />
                    <ul>
                        <FunkosList funkos={this.state.funkos} />
                    </ul>
                </Container>

                {/* TODO aqui usar Modal para la creacion de nuevo Funko */}

                <Modal show={this.state.showForm} onHide={() => this.toggleModalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crea aquí tu Funko</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FunkoForm closeModal={() => this.toggleModalForm(false)} refreshList={() => this.loadFunkos()} />
                    </Modal.Body>
                </Modal>
            </>


        )
    }
}

export default Funkos