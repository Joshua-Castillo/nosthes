import React, { Fragment } from 'react';
import MainFloor from '../photos/main_floor.jpg';
import ReadMore from './AboutReadMore';

const About = (props) => {
    return (
        <Fragment >
            <style type="text/css">
                {`
                    @media (min-width: 600px) {
                        .maxWidth {
                            width: 50rem;
                        }
                    }
                `}
            </style>
            <div id="about" className="m-3 text-center fw-bold">ABOUT US</div>
            <div className="row container mx-auto px-0 maxWidth">
                <div className="px-1 py-0 row">
                    <ReadMore />
                </div>
                <div className="row m-0 p-0 justify-content-center">
                    <img src={MainFloor} className="img-fluid p-0 maxWidth" alt="..." />
                </div>
            </div>
        </Fragment>
    );
};

export default About;