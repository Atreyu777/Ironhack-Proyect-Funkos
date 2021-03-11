import { Row, Col, Card } from 'react-bootstrap'

const MessageCard = ({ username, text }) => {

    return (

        <Col md={{ span: 8, offset: 4 }}>
            <br />
            <Card>
                <Card.Body>
                    <h4>{username}</h4>
                    <p>{text}</p>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default MessageCard