import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'
import Funkos from '../pages/Funkos/Funkos'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import FunkoDetails from '../pages/Funko-details/Funko-details'
import ConversationForm from '../pages/Conversation/Conversation-form'


const Routes = ({ storeUser, loggedUser, handleAlert }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage loggedUser={loggedUser} />} ></Route>
            <Route path="/listado-funkos" render={() => <Funkos loggedUser={loggedUser} handleAlert={handleAlert} />} ></Route>
            <Route path="/detalles/:funko_id" render={props => <FunkoDetails {...props} />} />
            <Route path="/registro" render={props => <Signup storeUser={storeUser} {...props} handleAlert={handleAlert} />}  ></Route>
            <Route path="/inicio-sesion" render={props => <Login storeUser={storeUser} {...props} handleAlert={handleAlert} />} ></Route>
            <Route path="/perfil" render={() => loggedUser ? <Profile loggedUser={loggedUser} handleAlert={handleAlert} /> : <Redirect to="/" />}></Route>
            <Route path="/nueva-conversacion/con/:owner" render={props => loggedUser ? <ConversationForm loggedUser={loggedUser} {...props} /> : <Redirect to="/" />}></Route>
        </Switch>
    )
}

export default Routes