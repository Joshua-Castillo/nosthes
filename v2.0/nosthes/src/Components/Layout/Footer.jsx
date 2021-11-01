import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';


const Footer = (props) => {
    return (
        <Fragment >
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
            <footer className="text-center text-white footer fixed-bottom bg-white">
                <div className="containter">
                    <span className="text-muted">
                        <a href="https://www.facebook.com/Nos-Th%C3%A9s-Guy-Concordia-152344081505147/"><Icon.Facebook color="green" size={25} className="m-2 mb-4 " /></a>
                        <a href="https://www.instagram.com/nos.thes/?hl=en"><Icon.Instagram color="green" size={25} className="m-2 mb-4" /></a>
                    </span>
                </div>
            </footer>

        </Fragment>
    );
};

export default Footer;