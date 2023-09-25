import React, { Fragment } from 'react';
import MainFloor from '../photos/main_floor.jpg';
import ReadMore from './AProposLirePlus.jsx';

const APropos = (props) => {
    return (
        <Fragment >
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
            <div id="about" className="mt-3 text-center fw-bold ">&Agrave; PROPOS</div>
            <div className="row container mx-auto px-0 maxWidth">
                <div className="px-1 py-0 row">
                    <ReadMore />
                </div>
                <div className="row m-0 p-0 w-100">
                    <img src={MainFloor} className="img-fluid p-0" alt="..." />
                </div>
            </div>
        </Fragment>
    );
};

export default APropos;