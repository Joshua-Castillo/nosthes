import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import Taro from '../photos/Taro.png';
import Hot from '../photos/hot.png';
import Matcha from '../photos/matcha.png';
import GreenBean from '../photos/green_bean.png';
import RedBean from '../photos/red_bean.png';

const Boissons = (props) => {
    return (
        <Fragment>
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
            <div className="row mx-auto my-3 container px-0 maxWidth">
                <div className="px-0 carousel slide carousel-fade col-6" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid" src={RedBean} alt="First slide" />
                        </div>
                        <div className="carousel-item active">
                            <img className="d-block w-100 img-fluid" src={Taro} alt="Second slide" />
                        </div>
                        <div className="carousel-item ">
                            <img className="d-block w-100 img-fluid" src={GreenBean} alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid" src={Matcha} alt="Fourth slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid" src={Hot} alt="Fifth slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid" src={RedBean} alt="Sixth slide" />
                        </div>
                    </div>
                </div>

                <div className="col-6 px-3 pb-3">
                    <h6 className="row text-start fw-bold text-decoration-underline px-1">NOS signatures</h6>
                    <h6 className="row text-start px-1">crémeux glacé</h6>
                    <h6 className="row text-start px-1">à la sorbet</h6>
                    <h6 className="row text-start px-1">baroque</h6>
                    <p className="row text-start fw-light px-1 fs-6">*végétalien disponible</p>
                    <div className="container pt-0 pr-0 text-right">
                        <Link to={"/menu-fr"}>
                            <Button outline color="success" size="sm" className="shadow-sm rounded-0 p-1">voir boissons</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default Boissons;