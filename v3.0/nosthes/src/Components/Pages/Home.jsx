import React, { Fragment } from 'react';
import NavBar from '../Layout/NavBar.jsx';
import Food from '../Layout/Food.jsx';
import Drinks from '../Layout/Drinks.jsx';
import Greeting from '../Layout/Greeting.jsx';
import Footer from '../Layout/Footer.jsx';
import About from '../Layout/About.jsx';
import JoinUs from '../Layout/JoinUs.jsx';
import Delivery from '../Layout/Delivery.jsx';

const Home = () => {
    return <Fragment >
        <NavBar />
        <Greeting />
        <div className="text-center fw-bold">MENU</div>
        <Drinks />
        <Food />
        <Delivery />
        <About />
        <JoinUs />
        <Footer />
    </Fragment >
};

export default Home;