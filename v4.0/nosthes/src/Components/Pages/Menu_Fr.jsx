import React, { Fragment } from 'react';

import NavBarMenu from '../Layout/NavBarMenu_Fr.jsx';
import Drinks1 from '../photos/boiss_fr1.jpeg';
import Drinks2 from '../photos/boiss_fr2.jpeg';
import Drinks3 from '../photos/boiss_fr3.jpeg';
import Drinks4 from '../photos/boiss_fr4.jpeg';

import Meal1 from '../photos/special_fr.jpeg';
import Meal2 from '../photos/vege_fr.jpeg';
import Meal3 from '../photos/nour_fr1.jpeg';
import Meal4 from '../photos/nour_fr2.jpeg';
import Meal5 from '../photos/nour_fr3.jpeg';

import Beer from '../photos/beer_fr.jpeg';

import Desserts from '../photos/desert_fr.jpeg';

import { Button } from 'reactstrap';



const Menu_Fr = () => {
    return <Fragment >
        <NavBarMenu />
        <h6 id="drinks" className="text-center border fw-bold">boissons</h6>
        <img src={Drinks1} alt="" className="img-fluid w-100" />
        <img src={Drinks2} alt="" className="img-fluid w-100" />
        <img src={Drinks3} alt="" className="img-fluid w-100" />
        <img src={Drinks4} alt="" className="img-fluid w-100" />

        <h6 id="beer" className=" text-center border fw-bold">bar</h6>
        <img src={Beer} alt="" className="img-fluid w-100" />

        <h6 id="food" className="text-center border fw-bold">nourriture</h6>
        <img src={Meal1} alt="" className="img-fluid w-100" />
        <img src={Meal2} alt="" className="img-fluid w-100" />
        <img src={Meal3} alt="" className="img-fluid w-100" />
        <img src={Meal4} alt="" className="img-fluid w-100" />
        <img src={Meal5} alt="" className="img-fluid w-100" />

        <h6 id="desserts" className="text-center border fw-bold">desserts</h6>
        <img src={Desserts} alt="" className="img-fluid w-100 mb-5" />

        <footer className="text-center text-white footer fixed-bottom mx-auto p-3 bg-white">
            <div className="row justify-content-center">
                <Button outline href="#drinks" color="success" size="md" className="shadow-sm rounded col mx-1">boissons</Button>
                <Button outline href="#beer" color="success" size="md" className="shadow-sm rounded col mx-1">bar</Button>
                <Button outline href="#food" color="success" size="md" className="shadow-sm rounded col mx-1">bouffe</Button>
                <Button outline href="#desserts" color="success" size="md" className="shadow-sm rounded col mx-1">desserts</Button>
            </div>
        </footer>
    </Fragment>
};

export default Menu_Fr;