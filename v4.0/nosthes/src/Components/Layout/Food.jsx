import React, { Fragment } from 'react';

import { Button } from 'reactstrap';

import Noodles from '../photos/noodles.png';
import Dumplings from '../photos/dumplings.png';
import IronPlate from '../photos/iron_plate.png';

const Food = (props) => {
    return (
        <Fragment  >
            <style type="text/css">
                {`
                    @media (min-width: 500px) {
                        .maxSize {
                            width: 50rem;
                        }
                    }
                `}
            </style>
            <div className="row mx-auto my-3 container px-0 maxWidth">
                <div className="col-6">
                    <h6 className="text-end fw-bold text-decoration-underline m-0">NOS cuisine</h6>
                    <div className="row"><h6 className="text-end">taiwanese stir-fry</h6></div>
                    <div className="row"><h6 className="text-end">noodles</h6></div>
                    <div className="row"><h6 className="text-end mb-2">snacks</h6></div>
                    <div className="text-end">
                        <a href="/menu-en#food">
                            <Button outline color="success" size="md" className="shadow-sm rounded-0 text-end">see food</Button>
                        </a>
                    </div>
                </div>
                <div id="carouselExampleSlidesOnly" className="px-0 carousel slide carousel-fade col-6 mx-0" data-bs-ride="carousel">
                    <div className="carousel-item active">
                        <img className="d-block w-100 img-fluid" src={IronPlate} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src={Noodles} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src={Dumplings} alt="Third slide" />
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default Food;