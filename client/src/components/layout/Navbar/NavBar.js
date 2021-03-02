import { Navbar, Nav} from 'react-bootstrap'
import logo from './logo.png'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="info" variant="dark" expand="lg" style={{ marginBottom: 30 }}>
            <Link to="/">
                <Navbar.Brand> <img
                    alt="logo"
                    src={logo}
                    className="d-inline-block align-top"/>
                </Navbar.Brand>
            </Link>
        </Navbar>
    )
}

export default NavBar