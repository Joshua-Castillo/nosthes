import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Logo from "../photos/logo.png";
import { Link } from 'react-scroll';

const NavBar_Fr = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
            <Navbar expand="lg" light className="container" >
                <NavbarBrand href="/" className="mx-auto my-3" expand="lg">
                    <img src={Logo} alt="" className="" height="100" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className="m-3" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto text-center" navbar>
                        <NavItem className="p-2">
                            <NavLink href="/menu-fr" className="m-3 my-auto p-0">menu</NavLink>
                        </NavItem>
                        <NavItem className="p-2">
                            <Link to="about" style={{ textDecoration: 'none' }} className="m-3 my-auto p-0 text-muted">&agrave; propos</Link>
                        </NavItem>
                        <NavItem className="p-2">
                            <Link to="delivery" style={{ textDecoration: 'none' }} className="m-3 my-auto p-0 text-muted">livraison</Link>
                        </NavItem>
                        <NavItem className="p-2">
                            <Link to="joinus" style={{ textDecoration: 'none' }} className="m-3 my-auto p-0 text-muted" >nous joindre</Link>
                        </NavItem>
                        <NavItem className="p-2">
                            <NavLink href={"/home"} className="m-3 my-auto p-0">english</NavLink >
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar_Fr;