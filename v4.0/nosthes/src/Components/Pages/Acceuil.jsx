import React, { Fragment } from 'react';
import NavBar from '../Layout/NavBar_Fr.jsx';
import Food from '../Layout/Nourriture.jsx';
import Drinks from '../Layout/Boissons.jsx';
import Greeting from '../Layout/Greeting_Fr.jsx';
import Footer from '../Layout/Footer.jsx';
import About from '../Layout/APropos.jsx';
import JoinUs from '../Layout/NousJoindre.jsx';
import Delivery from '../Layout/Livraison.jsx';



const Acceuil = () => {
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

export default Acceuil;