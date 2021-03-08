import FunkoCard from './Funko-card'
import { Row } from 'react-bootstrap'

const FunkosList = ({ funkos, user_id}) => {
    return (
        <Row>
            {funkos?.map(elm => <FunkoCard key={elm._id} {...elm} user_id={user_id}/>)}
        </Row>

    )

}
export default FunkosList