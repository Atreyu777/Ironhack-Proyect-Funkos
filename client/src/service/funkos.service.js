import axios from 'axios'

class FunkosService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/funkinder`,
            withCredentials: true
        })
    }

    saveFunko = funkoDetails => this.api.post('/newFunko', funkoDetails)
    getFunkos = () => this.api.get('/list')
    getMyFunkos = () => this.api.get('/listOwner')
    searchFunkos = (name) => this.api.get(`/list/filter/${name}`)
    getFunko = (funkoId, funkoDetails) => this.api.get(`/details/${funkoId}`, funkoDetails)
    deleteFunko = funkoId => this.api.get(`/delete/${funkoId}`)
    editFunko = (funkoId, funkoDetails) => this.api.put(`/edit/${funkoId}`, funkoDetails)
}

export default FunkosService