import { Component } from 'react'
import { Container } from 'react-bootstrap'
import MessageCard from './Message-card'

class ConversationList extends Component {

    render() {
        return (
            <Container>
                {this.props.conversation?.reverse().map(elm => <MessageCard {...elm} />)}
            </Container>
        )
    }
}

export default ConversationList

