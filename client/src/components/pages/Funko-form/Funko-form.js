import { Component } from 'react'
import FunkosService from '../../../service/funkos.service'
import { Container, Form, Button, Col } from 'react-bootstrap'
import UploadService from '../../../service/upload.service'


class FunkoForm extends Component {

    constructor() {
        super()
        this.state = {
            funko: {
                name: '',
                description: '',
                type: 'NORMAL',
                image: '',
                price: ''
            },
            isUploading: false
        }
        this.funkosService = new FunkosService()
        this.uploadService = new UploadService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ funko: { ...this.state.funko, [name]: value } })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.funkosService
            .saveFunko(this.state.funko)
            .then(() => {
                this.props.closeModal()
                this.props.refreshList()
                this.props.handleAlert(true, 'Registro guardado', 'Se ha guardado tu funko en la Base de Datos')
            })
            .catch(err => console.log(err))
    }
    handleFileUpload = (e) => {

        this.setState({ isUploading: true })

        const uploadData = new FormData()
        uploadData.append('image', e.target.files[0])

        this.uploadService
            .uploadFile(uploadData)
            .then(response => {
                this.setState({
                    isUploading: false,
                    funko: { ...this.state.funko, image: response.data.secure_url }
                })

            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <Container>
                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Nombre del Funko</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
                        <Form.Text className="text-muted">
                            El nombre real de tu Funko, si es "The Child", no lo llames Bebe Yoda!!
                    </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" name="description" placeholder="Añade una descripción de tu Funko o diles a los usuarios por qué es especial" value={this.state.description} onChange={e => this.handleInputChange(e)} />
                        <Form.Text className="text-muted">
                            Aquí también puedes indicar si tienes la caja, los coleccionistas lo agradecederán.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file" name="image" onChange={e => this.handleFileUpload(e)} />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridType">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control as="select" name="type" value={this.state.type} onChange={e => this.handleInputChange(e)}>
                                <option>NORMAL</option>
                                <option>EXCLUSIVE</option>
                                <option>GITD</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" name="price" value={this.state.price} onChange={e => this.handleInputChange(e)} /><Form.Text className="text-muted">
                                Pon un precio razonable, te ayudará a venderlo.
                    </Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="info" block type="submit" disabled={this.state.isUploading}>{this.state.isUploading ? 'Espere, subiendo imagen...' : 'Crear Funko'}</Button>
                </Form>
            </Container>

        )
    }
}

export default FunkoForm