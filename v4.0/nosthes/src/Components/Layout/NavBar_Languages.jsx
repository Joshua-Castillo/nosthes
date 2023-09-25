import React from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import Logo from "../photos/Black-Txt.png"

const NavBar_Languages = (props) => {
    return (
        <div>
            <Navbar expand="lg" className="m-0" >
                <NavbarBrand href="/" className="mx-auto">
                    <img src={Logo} alt="" className="" height="70" />
                </NavbarBrand>
            </Navbar>
        </div>
    );
}

export default NavBar_Languages;