import { Component } from 'react'
import AuthService from '../../../service/auth.service'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import avatarEva from '../../avatars/avatarEva.png'
import avatarWalle from '../../avatars/avatarWalle.png'
import avatarAlien from '../../avatars/avatarAlien.png'


class Signup extends Component {


    constructor() {
        super()
        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            avatar: ''

        }
        this.authService = new AuthService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleImageChange(e) {
        const active = document.getElementsByName("avatar")
        for (let i = 0; i < active.length; i++) {
            active[i].classList.replace("active", "disable")
        }
        e.target.classList.replace("disable", "active")
        this.setState({ avatar: e.target.getAttribute("alt") })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.authService
            .signup(this.state)
            .then(response => {
                this.props.storeUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
                this.props.handleAlert(true, 'Error', err.response.data.message)
            })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <h1>Registro de usuario</h1>
                        <hr />
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" value={this.state.email} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Avatar</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <img className="active" name="avatar" type="image" src={avatarAlien} alt="avatarAlien.png" value={this.state.image} onClick={e => this.handleImageChange(e)}></img>
                                <img className="disable" name="avatar" type="image" src={avatarEva} alt="avatarEva.png" value={this.state.image} onClick={e => this.handleImageChange(e)}></img>
                                <img className="disable" name="avatar" type="image" src={avatarWalle} alt="avatarWalle.png" value={this.state.image} onClick={e => this.handleImageChange(e)}></img>
                            </Form.Group>
                            <Button variant="info" block type="submit">Registrarme</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Signup