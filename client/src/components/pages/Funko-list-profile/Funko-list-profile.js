import { Component } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import FunkosList from '../Funkos/Funkos-list'
import FunkosService from '../../../service/funkos.service'
import FunkoForm from '../Funko-form/Funko-form'


class FunkoListProfile extends Component {

    constructor(props) {
        super(props)
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
            .getMyFunkos()
            .then(response => this.setState({ funkos: response.data }))
            .catch(err => console.log(err))
    }

    deleteFunko(funkoId) {
        this.funkosService
            .deleteFunko(funkoId)
            .then(response => this.loadFunkos())
            .catch(err => console.log(err))
    }

    toggleModalForm(value) {
        this.setState({ showForm: value })
    }

    render() {
        return (
            <>
                <Container>
                    <Button variant="info" onClick={() => this.toggleModalForm(true)} style={{ margin: 20 }}>Sube aquí tu Funko</Button>
                    <FunkosList funkos={this.state.funkos} user_id={this.props.user_id} deleteFunko={(funkoId) => this.deleteFunko(funkoId)} />
                </Container>
                <Modal show={this.state.showForm} onHide={() => this.toggleModalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Añade toda la información</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FunkoForm closeModal={() => this.toggleModalForm(false)} refreshList={() => this.loadFunkos()} handleAlert={this.props.handleAlert} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default FunkoListProfile