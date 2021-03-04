import { Component } from 'react'
import { Container } from 'react-bootstrap'
import FunkosList from './Funkos-list'
import FunkosService from '../../../service/funkos.service'
import './Funko-card.css'

class Funkos extends Component {

    constructor (){
        super()
        this.state = {
            funkos: []
        }

        this.funkosService = new FunkosService()

    }



    componentDidMount() {
        this.funkosService
            .getFunkos()
            .then(response => {
                console.log(response)
                this.setState({funkos: response.data})})
            .catch(err => console.log(err))
    }

    render(){
        return (
            <Container>
            <h1>Listado de Funkos</h1> 
            {/* TODO aqui usar LoggedUser cuando cree el botón */}
            <hr />
            <ul>
                <FunkosList funkos={this.state.funkos} />
            </ul>
            {/* TODO aqui usar Modal para la creacion de nuevo Funko */}
            </Container>
        )
    }
}

export default Funkos