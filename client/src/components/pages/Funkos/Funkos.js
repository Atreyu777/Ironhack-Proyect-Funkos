import { Component } from 'react'
import { Container } from 'react-bootstrap'
import FunkosList from './Funkos-list'

import FunkosService from '../../../service/funkos.service'

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
            .then(err => console.log(err))
    }

    render(){
        return (
            <Container>
            <h1>Listado de Funkos</h1>
            <hr />
            <ul>
                <FunkosList funkos={this.state.funkos} />
            </ul>
            </Container>
        )
    }
}

export default Funkos