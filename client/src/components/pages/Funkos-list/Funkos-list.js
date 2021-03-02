import { Component } from 'react'

class FunkosList extends Component {

    constructor (){
        super()
        this.state = {
            funkos: []
        }

    }

    render(){
        return (<h1>aqui la lista de funkos</h1>)
    }
}

export default FunkosList