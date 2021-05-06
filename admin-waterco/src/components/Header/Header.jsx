import React, { useContext } from "react";
import Context from "../../Context/Context";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { CHECK_AUTH, UPDATE_CURRENT_USER } from "../../reducers/types";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.scss";


const Header = () => {
    const history = useHistory();
    const { dispatch } = useContext(Context);

    const handleLogout = () => {
      dispatch({ type: CHECK_AUTH, payload: false});
      dispatch({ type: UPDATE_CURRENT_USER, payload: []});
      localStorage.clear();
      history.push("/");
      window.location.reload();
    }

    return (
      <Navbar className="header" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand onClick={() => history.push("/dashboard")}>WATER<span className="header-brand-blue">CO</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link className="header-link" onClick={() => history.push("/bill")}>Bill</Nav.Link>
          <Nav.Link className="header-link" onClick={() => history.push("/client")}>Client</Nav.Link>
          <Nav.Link className="header-link" onClick={() => history.push("/payment")}>Payment</Nav.Link>
          <Nav.Link className="header-link" onClick={() => history.push("/premise")}>Premise</Nav.Link>
          <Nav.Link className="header-link" onClick={() => history.push("/route")}>Route</Nav.Link>
          <Nav.Link className="header-link" onClick={() => history.push("/user")}>User</Nav.Link>
          <Nav.Link className="header-link" onClick={handleLogout}><i class="fas fa-sign-out-alt"></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )

}


export default Header;