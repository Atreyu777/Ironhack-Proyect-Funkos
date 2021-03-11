import { Toast } from 'react-bootstrap'
import logo from './logo.png'

const Alert = ({ handleAlert, show, title = "Mensaje del sistema" , text }) => {

    return (
        <Toast autohide show={show} onClose={() => handleAlert(false)} delay={3000} style={{ position: 'fixed', bottom: 50, right: 20, width: 400 }}>
            <Toast.Header>
                <img
                    src={logo}
                    className="rounded mr-2"
                    alt="Logotipo"
                    style={{ width: 40, height: 40 }}
                />
                <strong className="mr-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}



export default Alert