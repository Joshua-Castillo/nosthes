import React, { Fragment } from 'react';
import Fantuan from '../photos/fantuan.png'
import Hwy from '../photos/foodhwy.png'
import Panda from '../photos/hungry_panda.png'
import UberEats from '../photos/uber_eats.png'
import Skip from '../photos/skip.png'
import Dash from '../photos/doordash.png'

const Delivery = (props) => {
    return (
        <Fragment>
            <div id="delivery" className=" mt-5 fw-bold text-center m-auto">DELIVERY</div>
            <div className="row mx-auto container">
                <a className="col-4 p-2" href="https://download.fantuan.ca/">
                    <img src={Fantuan} className="img-fluid" alt="..." />
                </a>
                <a className="col-4 p-2" href="https://www.foodhwy.com/download">
                    <img src={Hwy} className="img-fluid" alt="..." />
                </a>
                <a className="col-4 p-2" href="https://www.hungrypanda.co/getapp/?utm_source=google&utm_medium=search&utm_campaign=%E5%93%81%E7%89%8C%E5%85%B3%E9%94%AE%E8%AF%8D-%E8%8B%B1%E6%96%87-%E5%8A%A0%E6%8B%BF%E5%A4%A7&gclid=Cj0KCQjwm9yJBhDTARIsABKIcGbeus5GygHCShs7JBJl_zN2sF3Bdhuzm175Vm2CW6gTjBjCtERQGs0aAj65EALw_wcB">
                    <img src={Panda} className="img-fluid" alt="..." />
                </a>
                <div className="row mx-auto" >
                    <a className="col-4 p-4 pt-0" href="https://about.ubereats.com/ca/en/how-it-works/download-uber-eats-app/">
                        <img src={UberEats} className="img-fluid " alt="..." />
                    </a>
                    <a className="col-4 p-4 pt-0" href="https://www.skipthedishes.com/">
                        <img src={Skip} class=" img-fluid" alt="..." />
                    </a>
                    <a className="col-4 p-2" href="https://www.doordash.com/">
                        <img src={Dash} className="img-fluid " alt="..." />
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

export default Delivery;