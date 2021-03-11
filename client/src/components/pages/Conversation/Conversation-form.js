import { Component } from 'react'
import ConversationService from '../../../service/conversation.service'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import ConversationList from '../Conversation/Conversation-list'

class ConversationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            owner: this.props.match.params.owner,
            loggedUser: this.props.loggedUser._id,
            username: this.props.loggedUser.username,
            message: '',
            conversationId: undefined,
            conversation: []
        }
        this.conversationService = new ConversationService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    componentDidMount() {

        this.conversationService
            .createConversation(this.state)
            .then(response => response?.data && this.setState({ conversationId: response.data.id }, () => this.loadConversation()))
            .catch(err => console.log(err))
    }

    loadConversation() {
        const conversation_id = this.state.conversationId

        this.conversationService
            .getConversation(conversation_id)
            .then(response => this.setState({ conversation: response.data.messages }))
            .catch(err => console.log(err))
    }

    handleSubmit(e) {
        e.preventDefault()

        const data = {
            message: this.state.message,
            username: this.state.username
        }

        this.conversationService
            .createMessage(data, this.state.conversationId)
            .then(() => this.loadConversation())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                <Col md={{ span: 8, offset: 2 }}>
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" name="message" value={this.state.message} onChange={e => this.handleInputChange(e)} />
                        </Form.Group>
                        <Button variant="info" block type="submit">Enviar mensaje</Button>
                    </Form>
                </Col>
                <Row>
                    <Col>

                        {this.state.conversationId && <ConversationList conversation={this.state.conversation} />}
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <h3>Ultimo mensaje</h3>
                    </Col>
                </Row>



            </Container>
        )
    }
}

export default ConversationForm