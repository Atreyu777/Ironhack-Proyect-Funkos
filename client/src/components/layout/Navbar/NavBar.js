import { Navbar, Nav } from 'react-bootstrap'
import logo from './logo.png'
import { Link, NavLink } from 'react-router-dom'

import AuthService from '../../../service/auth.service'

const NavBar = ({ storeUser, loggedUser, handleAlert }) => {

    const authService = new AuthService()
    const logoutUser = () => {

        authService
            .logout()
            .then(response => {
                storeUser(undefined)
                handleAlert(true, undefined, 'Has cerrado sesión')
            })
            .catch(err => console.log(err))
    }



    return (
        <Navbar bg="info" variant="dark" expand="md" style={{ marginBottom: 30 }}>
            <Link to="/">
                <Navbar.Brand> <img
                    alt="logo"
                    src={logo}
                    height="50"
                    className="d-inline-block align-top" />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/" exact>
                        <Nav.Link as="span">Inicio</Nav.Link>
                    </NavLink>
                    <NavLink to="/listado-funkos">
                        <Nav.Link as="span">Funkos</Nav.Link>
                    </NavLink>
                    {
                        loggedUser
                            ?
                            <>
                                <NavLink to="/perfil">
                                    <Nav.Link as="span">Perfil de {loggedUser.username}</Nav.Link>
                                </NavLink>
                                <Nav.Link as="span" onClick={() => logoutUser()}>Cerrar sesión</Nav.Link>
                                <Navbar.Brand> <img
                                    alt="avatar"
                                    src={`avatars/${loggedUser.avatar}`}
                                    height="40"
                                    className="d-inline-block align-top" />
                                </Navbar.Brand>

                            </>
                            :

                            <>
                                <NavLink to="/registro">
                                    <Nav.Link as="span">Registro</Nav.Link>
                                </NavLink>
                                <NavLink to="/inicio-sesion">
                                    <Nav.Link as="span">Iniciar sesión</Nav.Link>
                                </NavLink>
                            </>

                    }




                </Nav>
            </Navbar.Collapse>


        </Navbar>
    )
}

export default NavBar