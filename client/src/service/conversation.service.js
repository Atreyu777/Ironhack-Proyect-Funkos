import axios from 'axios'

class ConversationService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/conversation`,
            withCredentials: true
        })
    }

    createConversation = data => this.api.post('/createConversation', data)
    createMessage = (data, conversationId) => this.api.post(`/newMessage/${conversationId}`, data)
    getConversation = conversationId => this.api.get(`/showConversation/${conversationId}`)

}

export default ConversationService