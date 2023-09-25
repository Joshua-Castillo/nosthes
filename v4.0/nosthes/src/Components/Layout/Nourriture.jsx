import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import Noodles from '../photos/noodles.png';
import Dumplings from '../photos/dumplings.png';
import IronPlate from '../photos/iron_plate.png';

const Food = (props) => {
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
            <div className="row my-auto mx-auto container px-0 maxWidth">
                <div className="col-6">
                    <h6 className="text-end fw-bold text-decoration-underline m-0">NOS cuisine</h6>
                    <div className="row"><h6 className="text-end">sautés taiwannaise</h6></div>
                    <div className="row"><h6 className="text-end">nouilles</h6></div>
                    <div className="row"><h6 className="text-end mb-2">casse-croûtes</h6></div>
                    <div className="text-end">
                        <a href="/menu-fr#food">
                            <Button outline color="success" size="md" className="shadow-sm rounded-0 text-end">voir repas</Button>
                        </a>
                    </div>
                </div>
                <div id="carouselExampleSlidesOnly" className="px-0 carousel slide carousel-fade col-6" data-bs-ride="carousel">
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