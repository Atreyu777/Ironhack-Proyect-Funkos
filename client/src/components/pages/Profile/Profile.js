import { Container } from 'react-bootstrap'
import FunkoListProfile from '../Funko-list-profile/Funko-list-profile'

const Profile = ({ loggedUser, user_id, owner }) => {

    return (
        <Container>
            <h1>Bienvenid@ a tu perfil {loggedUser.username} </h1>
            <hr />
            <h2>Estos son los funkos que tienes en venta</h2>
            <FunkoListProfile user_id={loggedUser._id} />
          
           
        </Container>
    )


}
export default Profile