import React, { Fragment } from 'react';

import NavBarMenu from '../Layout/NavBarMenu.jsx';
import Drinks1 from './../photos/Menu-EN - Drink 1.jpg';
import Drinks2 from './../photos/Menu-EN - Drink 2.jpg';
import Drinks3 from './../photos/Menu-EN - Drink 3.jpg';
import Drinks4 from './../photos/Menu-EN - Drink 4.jpg';

import Meal1 from './../photos/Menu-EN - Meal 1.jpg';
import Meal2 from './../photos/Menu-EN - Meal 2.jpg';
import Meal3 from './../photos/Menu-EN - Meal 3.jpg';
import Meal4 from './../photos/Menu-EN - Meal 4.jpg';

import Beer from './../photos/Beer Menu-EN.jpg';

import Desserts from './../photos/Menu-EN - Desserts.jpg';

import { Button } from 'reactstrap';



const Menu = () => {
    return <Fragment >
        <NavBarMenu />
        <h6 id="drinks" className="text-center border fw-bold">drinks</h6>
        <img src={Drinks1} alt="" className="img-fluid w-100" />
        <img src={Drinks2} alt="" className="img-fluid w-100" />
        <img src={Drinks3} alt="" className="img-fluid w-100" />
        <img src={Drinks4} alt="" className="img-fluid w-100" />

        <h6 id="beer" className=" text-center border fw-bold">beer</h6>
        <img src={Meal1} alt="" className="img-fluid w-100" />
        <img src={Meal2} alt="" className="img-fluid w-100" />
        <img src={Meal3} alt="" className="img-fluid w-100" />
        <img src={Meal4} alt="" className="img-fluid w-100" />

        <h6 id="beer" className=" text-center border fw-bold">bi&egrave;re</h6>
        <img src={Beer} alt="" className="img-fluid w-100" />

        <h6 id="food" className="text-center border fw-bold">food</h6>
        <img src={Meal1} alt="" className="img-fluid w-100" />
        <img src={Meal2} alt="" className="img-fluid w-100" />
        <img src={Meal3} alt="" className="img-fluid w-100" />
        <img src={Meal4} alt="" className="img-fluid w-100" />

        <h6 id="desserts" className="text-center border fw-bold">desserts</h6>
        <img src={Desserts} alt="" className="img-fluid w-100" />

        <footer className="text-center text-white footer fixed-bottom mx-auto p-3 bg-white">
            <div className="row justify-content-center">
                <Button outline href="#drinks" color="success" size="md" className="shadow-sm rounded col mx-1">drinks</Button>
                <Button outline href="#beer" color="success" size="md" className="shadow-sm rounded col mx-1">beer</Button>
                <Button outline href="#food" color="success" size="md" className="shadow-sm rounded col mx-1">food</Button>
                <Button outline href="#desserts" color="success" size="md" className="shadow-sm rounded col mx-1">desserts</Button>
            </div>
        </footer>
    </Fragment>
};

export default Menu;