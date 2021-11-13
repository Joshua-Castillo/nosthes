import React, { Fragment } from 'react';
// import { Link, Redirect, useParams } from 'react-router-dom';
import logo from '../photos/nosthesLogo.jpg';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import NavBar_Languages from '../Layout/NavBar_Languages.jsx';
import TeaPot from '../photos/new_background.png';

const Langugages = () => {
    return <Fragment>
        <NavBar_Languages />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
            <div className="container px-4 px-md-3 pt-0">
                <div className="card overflow-hidden border-0 rounded-0 text-center">
                    <img src={TeaPot} className="card-img rounded-0 img-fluid" alt="" />
                    <div className="card-img-overlay pt-0 d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col">
                                <h1 className="card-title text-uppercase align-items-start boldonly">Bienvenue</h1>
                                <h2 className="card-title text-uppercase align-items-start boldonly">Welcome</h2>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link to={"/acceuil"} className="col-2 m-2 text-center ">
                        <Button outline color="success" size="md" className="shadow-sm rounded-0">Français</Button>
                    </Link>
                    <Link to={"/home"} className="col-2 m-2 text-center">
                        <Button outline color="success" size="md" className="shadow-sm rounded-0">English</Button>
                    </Link>
                </div>
            </div>
        </div>
    </Fragment>
};

export default Langugages;