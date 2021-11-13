import React, { Fragment } from 'react';
import MainFloor from '../photos/main_floor.jpg';
import ReadMore from './AProposLirePlus.jsx';

const APropos = (props) => {
    return (
        <Fragment >
            <div id="about" className="mt-3 text-center fw-bold ">&Agrave; PROPOS</div>
            <div className="row container mx-auto px-0">
                <div className="px-1 py-0 row">
                    <ReadMore />
                </div>
                <div className="row m-0 p-0 w-100">
                    <img src={MainFloor} class="img-fluid p-0" alt="..." />
                </div>
            </div>
        </Fragment>
    );
};

export default APropos;