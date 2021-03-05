import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'
import Funkos from '../pages/Funkos/Funkos'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import FunkoForm from '../pages/Funko-form/Funko-form'

const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />}></Route>
            <Route path="/listado-funkos" render={() => <Funkos loggedUser={loggedUser} />}></Route> 
            {/* TODO el loggedUser de Funkos para cuando cree el boton de crear funko */}
            {/* TODO ruta de detalles cuando me haga su componente */}
            <Route path="/registro" render={props => <Signup storeUser={storeUser} {...props} />}></Route>
            <Route path="/inicio-sesion" render={props => <Login storeUser={storeUser} {...props} />}></Route>
            <Route path="/perfil" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/" />}></Route>
            <Route path="/crear" render={() => <FunkoForm />}></Route> 



        </Switch>
    )
}

export default Routes