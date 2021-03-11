import FunkoCard from './Funko-card'
import { Row } from 'react-bootstrap'

const FunkosList = ({ funkos, user_id, deleteFunko }) => {
    return (
        <Row>
            {funkos?.reverse().map(elm => <FunkoCard key={elm._id} {...elm} user_id={user_id} deleteFunko={deleteFunko} />)}
        </Row>
    )
}
export default FunkosList