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

const NavBarMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="lg" light className="container" >
                <NavbarBrand href="/" className="mx-auto my-3" expand="lg">
                    <img src={Logo} alt="" className="" height="100" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className="m-3" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto text-center" navbar>
                        <NavItem className="p-2">
                            <NavLink className="m-0 p-0">menu</NavLink>
                        </NavItem>
                        <NavItem className="p-2">
                            <NavLink href="/home#about" style={{ textDecoration: 'none' }} className="m-0 p-0 text-muted">about</NavLink>
                        </NavItem>
                        <NavItem className="p-2">
                            <NavLink href="/home#delivery" style={{ textDecoration: 'none' }} className="m-0 p-0 text-muted">delivery</NavLink>
                        </NavItem>
                        <NavItem className="p-2">
                            <NavLink href="/home#joinus" style={{ textDecoration: 'none' }} className="m-0 p-0 text-muted" >join us</NavLink>
                        </NavItem>
                        <NavItem className="p-2">
                            <NavLink href={"/menu-fr"} className="m-0 p-0">francais</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBarMenu;