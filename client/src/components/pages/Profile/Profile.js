import { Container } from 'react-bootstrap'
import FunkoListProfile from '../Funko-list-profile/Funko-list-profile'

const Profile = ({ loggedUser, handleAlert }) => {

    return (
        <Container>
            <h1>Bienvenid@ a tu perfil {loggedUser.username} </h1>
            <hr />
            <h2>Estos son los funkos que tienes en venta</h2>
            <FunkoListProfile user_id={loggedUser._id} handleAlert={handleAlert} />
        </Container>
    )


}
export default Profile