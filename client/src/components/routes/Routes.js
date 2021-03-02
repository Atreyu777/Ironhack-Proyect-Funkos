import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'
import Funkos from '../pages/Funkos/Funkos'

const Routes = () => {

    return(
        <Switch>
            <Route path="/" exact render={() => <IndexPage></IndexPage>}></Route>
            <Route path="/listado-funkos" render={() => <Funkos></Funkos>}></Route>
            {/* TODO aqui iran el resto de rutas a medida que las necesite */}
        </Switch>
    )
}

export default Routes