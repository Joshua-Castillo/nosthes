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

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
            <style type="text/css">
                {`
                    @media (min-width: 600px) {
                        .maxWidth {
                            width: 50rem;
                            margin-left: auto;
                            margin-right: auto;
                        }
                    }
                `}
            </style>

            <Navbar expand="lg" light className="container maxWidth" >
                <NavbarBrand href="/" className="mx-auto my-3" expand="lg">
                    <img src={Logo} alt="" className="" height="100" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className="m-3" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto text-center" navbar>
                        <NavItem className="p-2">
                            <NavLink href="/menu-en" className="m-3 my-auto p-0 text-dark">menu</NavLink>
                        </NavItem>
                        <NavItem className="p-2">
                            <Link to="about" style={{ textDecoration: 'none' }} className="m-3 my-auto p-0 text-dark">about</Link>
                        </NavItem>
                        <NavItem className="p-2">
                            <Link to="delivery" style={{ textDecoration: 'none' }} className="m-3 my-auto p-0 text-dark">delivery</Link>
                        </NavItem>
                        <NavItem className="p-2">
                            <Link to="joinus" style={{ textDecoration: 'none' }} className="m-3 my-auto p-0 text-dark" >join us</Link>
                        </NavItem>
                        <NavItem className="p-2">
                            <NavLink href={"/acceuil"} className="m-3 my-auto p-0 text-dark">francais</NavLink >
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;