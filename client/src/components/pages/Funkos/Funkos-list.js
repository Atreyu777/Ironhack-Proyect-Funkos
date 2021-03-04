import FunkoCard from './Funko-card'
import { Row } from 'react-bootstrap'

const FunkosList = (props) => {
    return (
        <Row>
            {props.funkos?.map(elm => <FunkoCard key={elm._id} {...elm}></FunkoCard>)}
        </Row>

    )

}
export default FunkosList