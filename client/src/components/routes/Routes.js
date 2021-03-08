import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'
import Funkos from '../pages/Funkos/Funkos'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import FunkoDetails from '../pages/Funko-details/Funko-details'


const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage loggedUser={loggedUser} />}></Route>
            <Route path="/listado-funkos" render={() => <Funkos loggedUser={loggedUser} />}></Route> 
            <Route path="/detalles/:funko_id" render={props => <FunkoDetails {...props} />} />
            <Route path="/registro" render={props => <Signup storeUser={storeUser} {...props} />}></Route>
            <Route path="/inicio-sesion" render={props => <Login storeUser={storeUser} {...props} />}></Route>
            <Route path="/perfil" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/" />}></Route>
            



        </Switch>
    )
}

export default Routes